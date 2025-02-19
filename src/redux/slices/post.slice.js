import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    posts: [],
    loading: false,
    error: ''
};

export const fetchPost = createAsyncThunk(
    'post/fetchpost',
    async (_, { dispatch, rejectWithValue })=>{
      try{
        const resp = await axios.get('http://localhost:8080/post/all')
        if(resp.data.success){
          return resp.data.data
        }
      }catch(err){
        if(err.response){
          throw new Error(err.response.data.message)
        }
        else throw err.message
      }
    }
  )

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postLoading: (state) => {
            state.loading = true
            state.error = '';
        },
        postSuccess : (state,{payload})=>{
            state.loading = false;
            state.posts = payload;
            state.error = '';
        },
        postFail : (state,{error})=>{
            state.loading = false;
            state.error = error.message
        },
        postClear : (state)=>{
            state.loading = false;
            state.error = ''
            state.posts = []
        },
        postErrorClear : (state)=>{
            state.error = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPost.pending, (state) => {
            postSlice.caseReducers.postLoading(state);
        })
        .addCase(fetchPost.fulfilled, (state, {payload}) => {
            postSlice.caseReducers.postSuccess(state, {payload});
        })
        .addCase(fetchPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Failed to fetch posts';
        });
    }
});

export default postSlice.reducer