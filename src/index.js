import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PostService from './service/postService/postService';
import UserService from './service/userService/userService';

Amplify.configure(awsconfig);

const userService = new UserService();
const postService = new PostService();

ReactDOM.render(
  <React.StrictMode>
    <App postService={postService} userService={userService} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
