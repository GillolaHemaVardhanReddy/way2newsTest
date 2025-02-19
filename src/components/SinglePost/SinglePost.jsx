import React, { useState } from 'react'
import './SinglePost.css'

function SinglePost({head, news, image}) {
  const [more,setMore] = useState(100)
  return (
    <div className='single-post-container'>
      <h5>{head}</h5>
      <div className='post-content'>
        <p className='news'>
            {news.slice(0,more)}
            {more < news.length && <span className='show-more' onClick={()=>setMore(prev=> news.length)}>Load more</span>}
            {news.length-1 < more && news.length>100 && <span className='show-more' onClick={()=>setMore(prev=> 100)}>show less</span>}
        </p>
        <div className='post-img-cont'>
            <img className='post-image' src={image}/>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
