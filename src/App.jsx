import styles from './App.module.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import PostList from './components/postList/PostList';
import { useEffect, useState } from 'react';
import Modal from './components/modal/Modal';
import { ModalTypeContext } from './context/ModalTypeContext';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

/**
 * Data in this component:
 *  - current modal type / visibility
 *  - logged in user info
 *  - posts
 */
function App({ postService, userService }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    // Load posts from server
    postService.getPosts().then((posts) => setPosts(posts));
  }, [postService]);

  useEffect(() => {
    userService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          setUser(filterCognitoUser(user));
        } else {
          setUser(null);
        }
      })
      .catch(console.error);
  }, [userService]);

  const filterCognitoUser = (cognitoUser) => {
    const {
      username,
      attributes: { email },
    } = cognitoUser;
    return { username, email };
  };

  const signup = async (username, email, password) => {
    try {
      await userService.signup(username, email, password);
      await verifyUser(username);
    } catch (error) {
      throw error;
    }
  };

  const verifyUser = async (username) => {
    const code = prompt('Verification code (Sent to your email)');
    try {
      await userService.confirmSignup(username, code);
      alert('Successfully signed up! Welcome to MINI SNS!');
    } catch (error) {
      throw error;
    }
  };

  const signin = async (username, password) => {
    try {
      const user = await userService.login(username, password);
      setUser(filterCognitoUser(user));
    } catch (error) {
      throw error;
    }
  };

  const signout = async () => {
    try {
      userService.signout();
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

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
        signout={signout}
      />
      <Form addPost={addPost} />
      <PostList posts={posts} onDelete={deletePost} />
      {showModal && (
        <ModalTypeContext.Provider value={modalType}>
          <Modal
            signup={signup}
            signin={signin}
            closeModal={closeModal}
            openModalType={openModalType}
          />
        </ModalTypeContext.Provider>
      )}
    </div>
  );
}

export default App;
