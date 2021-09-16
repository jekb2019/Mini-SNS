import React from 'react';
import styles from './Post.module.css';
import PropTypes from 'prop-types';

const Post = ({ id, content, createdBy, onDelete }) => (
  <li className={styles.card}>
    <p className={styles.content}>{content}</p>
    <p className={styles.createdBy}>Created by: {createdBy}</p>
    <button className={styles.button} onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Post;
