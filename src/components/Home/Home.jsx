import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='home-container'>
        <div className='home-btns'>
            <p className='home-btn' onClick={()=>navigate('create')}>
                Create Post
            </p>
            <p className='home-btn' onClick={()=>navigate('view')}>
                View Posts
            </p>
        </div>
        <Outlet/>
    </div>
  )
}

export default Home