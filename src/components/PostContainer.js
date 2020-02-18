import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getPosts } from '../redux/actions/post';
import Post from './Post';


const PostContainer = () => {
    const [posts, setPosts] = useState([]);
    const postState = useSelector(state => state.post.posts);
    const userState = useSelector(state => state.user.auth);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);


    return (
        <div className="post-container">
            <Post posts={posts} user={userState}/>
        </div>
    );
}
 
export default PostContainer;