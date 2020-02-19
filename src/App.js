import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UserMenu from './containers/UserMenu';
import AuthenticateUser from './components/AuthModal';
import HandlePosts from './components/PostModal';
import PostContainer from './containers/PostContainer';
import FollowedUsers from './components/FollowedUsers';
import 'semantic-ui-css/semantic.min.css';

const App = () =>  {
  return (
      <BrowserRouter>
        <UserMenu />
        <AuthenticateUser />
        <HandlePosts />
        <Route path="/home" component={PostContainer}/>
        <Route exact path="/following" component={FollowedUsers}/>
      </BrowserRouter>
  );
}

export default App;
