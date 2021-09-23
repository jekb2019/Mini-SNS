import React, { useState, useEffect } from 'react';
import Board from '../../components/board/Board';

/**
 * This component stores business logic for the forum board.
 */
const Forum = ({ user, postService }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getPosts().then((posts) => setPosts(posts));
    // return () => {
    //   cleanup
    // }
  }, [postService]);

  /**
   * Adds the post to the server and only update the UI if it is successful
   */

  const addPost = async (content) => {
    let post;
    if (!user) {
      throw new Error('Not Authorized. Please Log in.');
    }
    try {
      post = await postService.addPost(user.username, content);
    } catch (error) {
      throw new Error('Error occured adding new post');
    }
    post && setPosts([post, ...posts]);
  };

  const deletePost = async (id) => {
    let processedPost;
    // user validations
    if (user === null) {
      throw new Error('You need to Log in first.');
    }

    const targetPost = posts.find((post) => post.id === id);
    if (targetPost.author !== user.username) {
      throw new Error('Unauthorized to delete the post.');
    }

    // Delete post from server
    try {
      processedPost = await postService.deletePost(id);
    } catch (error) {
      throw new Error(`Unable to delete the post`);
    }

    // Delete post in the component state (UI)
    setPosts(processedPost);
  };

  return <Board posts={posts} addPost={addPost} deletePost={deletePost} />;
};

export default Forum;
