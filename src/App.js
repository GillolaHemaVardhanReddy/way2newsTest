import './App.css';
import { RouterProvider } from 'react-router-dom';
import { way2newsBrowser } from './Routes/routes';
function App() {
  return (
    <>
      <RouterProvider router={way2newsBrowser}/>
    </>
  );
}

export default App;
