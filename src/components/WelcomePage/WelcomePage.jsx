import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import welcomeposter from '../../assets/welcomeposter.jpg'

const WelcomePageme = () => {
    const navigate = useNavigate();
  return (
    <div className='welcome-image'>
        <img src={welcomeposter}/>
    </div>
  )
}

export default WelcomePageme