import React from 'react';
import Form from '../form/Form';
import PostList from '../postList/PostList';

const Board = ({ posts, addPost, deletePost }) => (
  <>
    <Form addPost={addPost} />
    <PostList posts={posts} onDelete={deletePost} />
  </>
);

export default Board;
