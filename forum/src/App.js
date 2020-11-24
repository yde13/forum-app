import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import PostListPage from './pages/PostListPage'
import PostCreatePage from './pages/PostCreatePage'
import PostDetailPage from './pages/PostDetailPage';
import HomePage from './pages/HomePage';

import GuardedRoute from './components/login/GuardedRoute';
import AuthKit from './data/AuthKit'


import { UserContext } from './contexts/UserContext';
import { PostContext } from './contexts/PostContext';
import { ReplyContext } from './contexts/ReplyContext';

import GlobalStyle from './theme/globalStyles';


function App() {
  const [userData, setUserData] = useState(null)
  const [postData, setPostData] = useState(null)
  const [replyData, setReplyData] = useState(null)
  const authKit = new AuthKit()



  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ userData, setUserData }}>
        <PostContext.Provider value={{ postData, setPostData }}>
          <ReplyContext.Provider value={{ replyData, setReplyData }}>

            <Navbar />

            <Switch>

              <GuardedRoute exact path="/posts/create" component={PostCreatePage} auth={authKit.decodeToken()} />

              <GuardedRoute exact path="/posts/:id" component={PostDetailPage} auth={authKit.decodeToken()} />

              <Route exact path="/login" component={LoginPage}></Route>

              <Route exact path="/register" component={RegisterPage}></Route>

              <GuardedRoute exact path="/posts" component={PostListPage} auth={authKit.decodeToken()} />

              <GuardedRoute exact path="/" component={HomePage} auth={authKit.decodeToken()} />

            </Switch>

          </ReplyContext.Provider>
        </PostContext.Provider>
      </UserContext.Provider>

    </>
  );
}

export default App;
