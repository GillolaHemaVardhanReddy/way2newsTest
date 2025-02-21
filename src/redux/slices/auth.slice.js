import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  isAuth: false,
  loading: false,
  error: ''
}

const base = process.env.BASE_URL || "http://localhost:8081"

export const fetchUser = createAsyncThunk('auth/fetchuser',async ({email,password},{ dispatch, rejectWithValue })=>{
    try{
        const resp = await axios.post(
            `${base}/auth/signin`, 
            { email, password },
            { withCredentials: true }
        );
        console.log(resp.data)
        return {
          email:resp.data.data.email,
        }
    }catch(err){   
        if (err.response && err.response.data && err.response.data.message) {
          throw new Error(err.response.data.message);
        } else {
          throw err
        }
    }
})

export const logOutAndClear = createAsyncThunk('auth/logoutandclear',async (_, { dispatch, rejectWithValue }) => {
  try {
    const resp = await axios.get(`${base}/auth/signout`,{
      withCredentials: true,
    });
    console.log(resp.data)
    if (resp.data.success) {
      return resp.data.data;
    } else {
      throw new Error("Problem logging out");
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return rejectWithValue(err.response.data.message);
    } else {
      return rejectWithValue(err.message);
    }
  }
}
);


const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logoutStart:(state)=>{
          state.loading = true;
          state.error = ''
        },
        logoutSuccess : (state,{payload})=>{
          state.isAuth = false;
          state.user = payload
          state.error = ''
          state.loading = false
        },
        logoutFail : (state,{payload})=>{
          state.error = payload
        },
        clearAuthError: (state) => {
          state.error = '';
        },
    },
    extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(fetchUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.user = payload 
        state.isAuth = true;
      })
      .addCase(fetchUser.rejected, (state, {error}) => {
        state.loading = false;
        state.error = error.message
        state.isAuth = false
      })
      .addCase(logOutAndClear.pending, (state)=>{
        AuthSlice.caseReducers.logoutStart(state)
      })
      .addCase(logOutAndClear.fulfilled,(state,{payload})=>{
        AuthSlice.caseReducers.logoutSuccess(state,{payload})
      })
      .addCase(logOutAndClear.rejected,(state,{error})=>{
        AuthSlice.caseReducers.logoutFail(state,{error})
      })
  },
})

export default AuthSlice.reducer


export const {
  logoutStart,
  logoutSuccess,
  logoutFail,
  clearAuthError
} = AuthSlice.actions