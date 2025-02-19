import React from 'react'
import './SinglePost.css'
import post_default from "../../assets/post_default.jpeg"

function SinglePost({head, news, image}) {
  return (
    <div className='single-post-container'>
      <h5>{head}</h5>
      <div className='post-content'>
        <p>
            {news}
        </p>
        <div className='post-img-cont'>
            <img className='post-image' src={image}/>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
