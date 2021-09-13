import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import PostList from './components/postList/PostList';
import { useEffect, useState } from 'react';

function App({ postService }) {
  const [posts, setPosts] = useState([]);
  const [user, setuser] = useState('Jason');

  useEffect(() => {
    postService.getPosts().then((posts) => setPosts(posts));
  }, []);

  const deletePost = async (id) => {
    try {
      await postService.deletePost(id);
    } catch (e) {
      throw new Error('Unable to delete post');
    }
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id !== id);
    });
  };

  const addPost = async (content) => {
    const post = await postService.addPost(user, content);
    setPosts((prevPosts) => [post, ...posts]);
  };

  return (
    <div className={styles.app}>
      <Header />
      <Form addPost={addPost} />
      <PostList posts={posts} onDelete={deletePost} />
    </div>
  );
}

export default App;
