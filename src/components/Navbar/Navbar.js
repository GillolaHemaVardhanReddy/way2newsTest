import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import nav_log from '../../assets/logo-no-background.png'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='nav-container'>
        <div className='nav-left'>
            <img src={nav_log} alt='' className='nav-logo'/>
        </div>
        <div className='nav-right'>
            <p className='nav-btn' onClick={()=>navigate('posts')}>Home</p>
            <p className='nav-btn'>Login</p>
        </div>
    </div>
  )
}

export default Navbar