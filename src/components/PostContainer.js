import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Post from './Post';


const PostContainer = () => {
    const [posts, setPosts] = useState([]);
    const postState = useSelector(state => state.post.posts);
    const userState = useSelector(state => state.user.auth);
    
    useEffect(() => {
        const getPosts = async () => {
            const posts = await fetch(`http://localhost:8000/post/retrieve`);
            const parsedPosts = await posts.json();
            setPosts(parsedPosts.data);
        }
            getPosts();
    }, [postState]);


    return (
        <div className="post-container">
            <Post posts={posts}/>
        </div>
    );
}
 
export default PostContainer;