import React from 'react';

import UserMenu from './containers/UserMenu';
import AuthenticateUser from './components/AuthModal';
import HandlePosts from './components/PostModal';
import PostContainer from './components/PostContainer';
import 'semantic-ui-css/semantic.min.css';

const App = () =>  {
  return (
      <>
        <UserMenu />
        <AuthenticateUser />
        <HandlePosts />
        <PostContainer />
      </>
  );
}

export default App;
