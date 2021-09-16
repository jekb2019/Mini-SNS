import styles from './App.module.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import PostList from './components/postList/PostList';
import { useEffect, useState } from 'react';
import Modal from './components/modal/Modal';
import { ModalTypeContext } from './context/ModalTypeContext';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

async function signup(username, email, password) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    console.log(user);
  } catch (error) {
    console.error('Error signing up: ' + error);
  }
}

/**
 * Data in this component:
 *  - current modal type / visibility
 *  - logged in user info
 *  - posts
 */
function App({ postService, userService }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState('jason');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const signup = async (username, email, password) => {
    try {
      await userService.signup(username, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Load posts from server
    postService.getPosts().then((posts) => setPosts(posts));
  }, [postService]);

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
          <Modal
            signup={signup}
            closeModal={closeModal}
            openModalType={openModalType}
          />
        </ModalTypeContext.Provider>
      )}
    </div>
  );
}

export default App;
