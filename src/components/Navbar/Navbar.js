import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import nav_log from '../../assets/logo-no-background.png'
import { useDispatch, useSelector } from 'react-redux';
import { logOutAndClear } from '../../redux/slices/auth.slice';

const Navbar = () => {
  const dispatch = useDispatch()
  const manageLogin = useSelector(state=>state.auth.isAuth)
  const navigate = useNavigate();
  const logout = ()=>{
    dispatch(logOutAndClear())
  }
  return (
    <div className='nav-container'>
        <div className='nav-left'>
            <img src={nav_log} alt='' className='nav-logo'/>
        </div>
        <div className='nav-right'>
            { manageLogin ? 
                <>
                  <p className='nav-btn' onClick={()=>navigate('home')}>Home</p>
                  <p className='nav-btn' onClick={logout}>Logout</p>
                </>
              : <p className='nav-btn' onClick={()=>navigate('login')}>Login</p>
            }
        </div>
    </div>
  )
}

export default Navbar