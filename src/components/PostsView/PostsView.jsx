import React, { useEffect } from 'react';
import './PostsView.css';
import SinglePost from '../SinglePost/SinglePost';
import { fetchPost } from '../../redux/slices/post.slice';
import { useDispatch, useSelector } from 'react-redux';

function PostsView() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post?.posts || []); 
  const loading = useSelector(state => state.post?.loading);
  const error = useSelector(state => state.post?.error);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div className='posts-view'>
      {loading && <p>Loading posts...</p>}
      {error && <p>Error: {error}</p>}
      {posts.length === 0 && !loading && <p>No posts available</p>}
      {posts.map((ele, id) => (
        <SinglePost key={id} head={ele.heading} news={ele.news} image={ele.image}/>
      ))}
    </div>
  );
}

export default PostsView;