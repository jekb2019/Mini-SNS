import React from 'react';
import styles from './Post.module.css';

const Post = ({ id, content, createdBy, onDelete }) => (
  <li className={styles.card}>
    <p className={styles.content}>{content}</p>
    <p className={styles.createdBy}>Created by: {createdBy}</p>
    <button className={styles.button} onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

export default Post;
