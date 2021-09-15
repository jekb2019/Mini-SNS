import styles from './App.module.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import PostList from './components/postList/PostList';
import { useEffect, useState } from 'react';
import Modal from './components/modal/Modal';
import { ModalTypeContext } from './context/ModalTypeContext';

/**
 * Is Modal Design good enough?
 * What is Higher order component? Should I include this?
 * Add Prop types
 */

function App({ postService }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    // Load posts from server
    postService.getPosts().then((posts) => setPosts(posts));
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
  };

  const openModalType = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const deletePost = async (id) => {
    // Delete post from server
    try {
      await postService.deletePost(id);
    } catch (e) {
      throw new Error(`Unable to delete post with id [${id}]`);
    }
    // Delete post in the component state (UI)
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id !== id);
    });
  };

  const addPost = async (content) => {
    // Add post to server
    const post = await postService.addPost(user, content);
    // Add post to UI
    setPosts([post, ...posts]);
  };

  return (
    <div className={styles.app}>
      <Header
        showLoginModal={() => {
          openModalType('login');
        }}
        user={user}
      />
      <Form addPost={addPost} />
      <PostList posts={posts} onDelete={deletePost} />
      {showModal && (
        <ModalTypeContext.Provider value={modalType}>
          <Modal closeModal={closeModal} openModalType={openModalType} />
        </ModalTypeContext.Provider>
      )}
    </div>
  );
}

export default App;
