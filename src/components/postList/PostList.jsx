import React from 'react';
import Post from '../post/Post';
import styles from './PostList.module.css';

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

export default PostList;
