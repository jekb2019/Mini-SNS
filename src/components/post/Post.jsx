import React from 'react';
import styles from './Post.module.css';
import PropTypes from 'prop-types';
import Button from '../button/Button';

const Post = ({ id, content, createdBy, onDelete }) => {
  const handleDelete = async () => {
    try {
      await onDelete(id);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <li className={styles.card} data-testId="post">
      <p className={styles.content} data-testId="content">
        {content}
      </p>
      <p className={styles.createdBy} data-testId="createdBy">
        Created by: {createdBy}
      </p>
      <div className={styles.btnWrapper}>
        <Button
          type="bounce"
          size="small"
          label="Delete"
          onClick={() => handleDelete(id)}
        />
      </div>
    </li>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Post;
