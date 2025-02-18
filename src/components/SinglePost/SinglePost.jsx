import React from 'react'
import './SinglePost.css'
import post_default from "../../assets/post_default.jpeg"

function SinglePost() {
  return (
    <div className='single-post-container'>
      <h5>will there be a rematch between pakistan and india</h5>
      <div className='post-content'>
        <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap 
            into electronic typesetting, remaining essentially unchanged. It was 
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className='post-img-cont'>
            <img className='post-image' src={post_default}/>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
