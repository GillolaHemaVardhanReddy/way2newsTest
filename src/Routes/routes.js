
import { 
    Navigate, 
    Route, 
    createBrowserRouter, 
    createRoutesFromElements 
} from 'react-router-dom';
import RootLayout from '../Layouts/RootLayout';
import Home from '../components/Home/Home';
import PostForm from '../components/PostForm/PostForm';
import WelcomePage from '../components/WelcomePage/WelcomePage';
import PostsView from '../components/PostsView/PostsView';
import Login from '../components/Login/Login'; 
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';


const LoginRoute = () => {
  const { isAuth } = useSelector((state) => state.auth); 

  return isAuth ? <Navigate to="/home" /> : <Login />
};

export const way2newsBrowser = createBrowserRouter(
 createRoutesFromElements(
   <Route path='/' element={<RootLayout/>}>
     <Route index element={<WelcomePage head='home'/>}/>
     <Route path='login' element={<LoginRoute/>}/>
     <Route path='home' element={<PrivateRoute element={<Home/>}/>}>
        <Route index element={<WelcomePage/>}/>
        <Route path='create' element={<PostForm/>}/>
        <Route path='view' element={<PostsView/>}/>
     </Route>
   </Route>
 )
)