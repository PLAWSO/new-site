import Amplify from 'aws-amplify';
import React from 'react';
import classes from './App.module.css';

import MainNavigation from './components/layout/MainNavigation';
import {Route, Routes} from 'react-router-dom';

import AllPostsPage from './pages/AllPosts'
import NewPostPage from './pages/NewPost'
import TopPostsPage from './pages/TopPosts'

import config from './aws-exports';

Amplify.configure(config)

function App() {
  return (
    <div>
      <MainNavigation />
      <div className={classes.content}>
        <Routes>
          <Route path="/" element={<AllPostsPage />} />
          <Route path="/new-post" element={<NewPostPage />} />
          <Route path="/top-posts" element={<TopPostsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
