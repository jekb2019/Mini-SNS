import React from 'react';
import Post from '../post/Post';
import styles from './PostList.module.css';
import PropTypes from 'prop-types';

const PostList = ({ posts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {posts.map((post) => {
        const { id, content, author } = post;
        return (
          <Post
            key={id}
            id={id}
            content={content}
            createdBy={author}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostList;
