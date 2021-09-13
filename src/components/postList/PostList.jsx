import React from 'react';
import Post from '../Post/Post';
import styles from './PostList.module.css';

const PostList = (props) => (
  <ul className={styles.list}>
    <Post />
    <Post />
    <Post />
  </ul>
);

export default PostList;
