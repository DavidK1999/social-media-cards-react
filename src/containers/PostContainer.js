import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { getPosts } from '../redux/actions/post';
import Post from './Post';

const PostContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const home = history.location.pathname && history.location.pathname === '/home';
    console.log(home);
    const redirected = home === '/home';
    const postState = useSelector(state => state.post.posts);
    const userState = useSelector(state => state.user.auth);
    const loggedIn = useSelector(state => state.user.loggedIn);
    const createdPosts = userState.createdPosts && userState.createdPosts;
    const followedUsersCount = userState.followedUsersCount;
    useEffect(() => {
        dispatch(getPosts());
      }, [dispatch, createdPosts, followedUsersCount, home]);
    
    return (
        <div className="post-container">
            <Post posts={postState} user={userState} loggedIn={loggedIn}/>
        </div>
    );
}
 
export default PostContainer;