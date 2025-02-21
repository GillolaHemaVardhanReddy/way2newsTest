import React from 'react'
import welcomeposter from '../../assets/welcomeposter.jpg'
import home from '../../assets/home.jpg'
import './WelcomePage.css'

const WelcomePageme = ({head="welcome"}) => {
  console.log(head)
  return (
    <div className='welcome-image'>
        <img alt='welcome poster' src={head=="home" ? home : welcomeposter}/>
    </div>
  )
}

export default WelcomePageme