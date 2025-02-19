import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './PostForm.css'

const PostForm = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({heading:"", news:"", image:""})
  return (
    <div className='form-container'>
        <div className='form'>
            <h1> Create Post</h1>
            <div className='input-box'>
                <label>Heading</label>
                <input type='text'className='input-def' onClick={""}/>
            </div>
            <div className='input-box'>
                <label>news</label>
                <textarea className='text-area-inp-def'/>
            </div>
            <div className='input-box'>
                <label>Image</label>
                <input type='file' className='file-inp'/>
            </div>
            <div className='input-box'>
                <button className='form-submit-button'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default PostForm