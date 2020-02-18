import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getPosts } from '../redux/actions/post';
import Post from './Post';


const PostContainer = () => {
    const dispatch = useDispatch();
    const postState = useSelector(state => state.post.posts);
    const userState = useSelector(state => state.user.auth);

    useEffect(() => {
        dispatch(getPosts());
      }, [dispatch, postState.length]);
    
    return (
        <div className="post-container">
            <Post posts={postState} user={userState}/>
        </div>
    );
}
 
export default PostContainer;