
import { 
    Navigate, 
    Outlet, 
    Route, 
    createBrowserRouter, 
    createRoutesFromElements 
} from 'react-router-dom';
import RootLayout from '../Layouts/RootLayout';
import Home from '../components/Home/Home';
import PostForm from '../components/PostForm/PostForm';
import WelcomePageme from '../components/WelcomePage/WelcomePage';
import PostsView from '../components/PostsView/PostsView';

export const way2newsBrowser = createBrowserRouter(
 createRoutesFromElements(
   <Route path='/' element={<Outlet/>}>
     <Route index element={<Navigate to='home' replace />}/>
     <Route path='home' element={<RootLayout/>}>
      <Route path='posts' element={<Home/>}>
        <Route index element={<WelcomePageme/>}/>
        <Route path='create' element={<PostForm/>}/>
        <Route path='view' element={<PostsView/>}/>
      </Route>
     </Route>
   </Route>
 )
)