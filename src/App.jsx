import styles from './App.module.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import PostList from './components/postList/PostList';
import { useEffect, useState } from 'react';
// import Modal from './components/modal/Modal';
import Modal from './components/modal/Modal';

function App({ postService }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
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
    setPosts([post, ...posts]);
  };

  return (
    <div className={styles.app}>
      <Header
        showLoginModal={() => {
          openModalType('LOG_IN');
        }}
        user={user}
      />
      <Form addPost={addPost} />
      <PostList posts={posts} onDelete={deletePost} />
      {showModal && (
        <div className={styles.modalWrapper}>
          <Modal
            type={modalType}
            closeModal={closeModal}
            openModalType={openModalType}
          />
        </div>
      )}
    </div>
  );
}

export default App;
