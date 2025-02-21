import React, { useEffect, useState } from 'react';
import './Login.css';
import {useDispatch, useSelector} from 'react-redux'
import { fetchUser } from '../../redux/slices/auth.slice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isAuth} = useSelector(state=>state.auth)
  const [findpage, setFindPage] = useState(0);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    if (!findpage) {
      dispatch(fetchUser({ email, password }));
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    }
  }, [isAuth, navigate]);
  

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-heading">{findpage ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="input-field"
            />
          </div>
          <button type="submit" className="login-button">
            {findpage ? "Sign Up" : "Login"}
          </button>
        </form>
        <p>{findpage ? "Already have an account?" : "Don't have an account?"}
          <span 
            className="sign-in-up" 
            onClick={() => setFindPage((prev) => !prev)}
          >
            {findpage ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
