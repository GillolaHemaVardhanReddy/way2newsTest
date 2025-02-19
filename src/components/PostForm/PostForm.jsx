import React, {useEffect, useState} from 'react'
import './PostForm.css'
import { uploadFile } from '../../helper/uploadFile';
import axios from 'axios';

const PostForm = () => {
    const [form, setForm] = useState({heading:"", news:"", image:""})
    const [uploadError, setUploadError] = useState('');
    const [checkack, setCheckAck] = useState(0)
    const [ack, setAck] = useState('')
    const base = process.env.BASE_URL || "https://way2newstestserver.onrender.com"
    const submitForm = async ()=>{
        const resp = await axios.post(`${base}/post/create`, form)
        if(resp.data.success){
            setAck(prev=> "created post successfully")
            setForm({heading:"", news:"", image:""})
        }
    }

    useEffect(() => {
        console.log(form); // To log updated form state
    }, [form]);

    const handleChange = async (e) => {
        const { name, value, type, files } = e.target;
      
        if (type === 'file' && files && files.length > 0) {
          try {
            const uploadPhoto = await uploadFile(files[0]);
            if(uploadPhoto.url){
                setCheckAck(1)
            }
            setForm(prevFormData => ({ ...prevFormData, [name]: uploadPhoto.url }));
          } catch (error) {
            setUploadError('File upload failed. Please try again.');
          }
        } 
        else {
          setForm(prevFormData => ({ ...prevFormData, [name]: value }));
        }
      };
      

  return (
    <div className='form-container'>
        <div className='form'>
            <h1> Create Post</h1>
            <p>{ack}</p>
            <div className='input-box'>
                <label>Heading</label>
                <input 
                    type='text'
                    className='input-def'
                    name="heading"
                    value={form.heading}
                    onChange={handleChange}
                />
            </div>
            <div className='input-box'>
                <label>news</label>
                <textarea 
                    className='text-area-inp-def'
                    name="news"
                    value={form.news}
                    onChange={handleChange}
                />
            </div>
            <div className='input-box'>
                <label>Image</label>
                <input 
                    type='file' 
                    className='file-inp'
                    name="image"
                    onChange={handleChange}
                />
                {uploadError && <p className="error">{uploadError}</p>}
            </div>
            <div className='input-box'>
                <button disabled={checkack ? false : true} className='form-submit-button' onClick={submitForm}>
                        Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default PostForm