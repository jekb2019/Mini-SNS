import React from 'react';
import Form from '../form/Form';
import PostList from '../postList/PostList';
import PropTypes from 'prop-types';

const Board = ({ posts, addPost, deletePost }) => (
  <>
    <Form addPost={addPost} />
    <PostList posts={posts} onDelete={deletePost} />
  </>
);

Board.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string,
      author: PropTypes.string,
    })
  ).isRequired,
};

export default Board;
