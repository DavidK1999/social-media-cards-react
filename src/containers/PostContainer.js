import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getPosts } from '../redux/actions/post';
import Post from './Post';


const PostContainer = () => {
    const dispatch = useDispatch();
    const postState = useSelector(state => state.post.posts);
    const userState = useSelector(state => state.user.auth);
    const loggedIn = useSelector(state => state.user.loggedIn);
    const createdPosts = userState.createdPosts && userState.createdPosts;
    useEffect(() => {
        dispatch(getPosts());
      }, [dispatch, createdPosts]);
    
    return (
        <div className="post-container">
            <Post posts={postState} user={userState} loggedIn={loggedIn}/>
        </div>
    );
}
 
export default PostContainer;