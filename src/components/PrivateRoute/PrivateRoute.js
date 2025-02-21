import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
  const { isAuth } = useSelector((state) => state.auth); 
  
  if (!isAuth) {
    return <Navigate to="/login" />; 
  }

  return element; 
};

export default PrivateRoute;
