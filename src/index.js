import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PostService from './service/postService/postService';
import UserService from './service/userService/userService';

const postService = new PostService();
const userService = new UserService();

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
