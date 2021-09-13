import React from 'react';
import styles from './Post.module.css';

const Post = (props) => (
  <li className={styles.card}>
    <p className={styles.content}>POST</p>
    <p className={styles.createdBy}>Created by: user1</p>
    <button className={styles.button}>Delete</button>
  </li>
);

export default Post;
