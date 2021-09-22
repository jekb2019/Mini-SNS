import styles from './App.module.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import PostList from './components/postList/PostList';
import { useEffect, useState } from 'react';
import Modal from './components/modal/Modal';
import { ModalContext } from './context/ModalContext';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { filterCognitoUser } from './util/auth';

Amplify.configure(awsconfig);

/**
 * Data in this component:
 *  - current modal type & visibility
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

  /**
   * Get current user from AWS Cognito
   */
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

  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
  };

  const openModalType = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const signup = async (username, email, password) => {
    try {
      await userService.signup(username, email, password);
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

  const deletePost = async (id) => {
    // user validation
    if (user === null) {
      throw new Error('You need to login first.');
    }

    const targetPost = posts.find((post) => post.id === id);
    if (targetPost.author !== user.username) {
      throw new Error('Unauthorized to delete the post.');
    }

    // Delete post from server
    try {
      await postService.deletePost(id);
    } catch (e) {
      throw new Error(`Unable to delete the post`);
    }
    // Delete post in the component state (UI)
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id !== id);
    });
  };

  const addPost = async (content) => {
    if (!user) {
      throw new Error('Not Authorized. Please Log in.');
    }
    // Add post to server
    const post = await postService.addPost(user.username, content);
    // Add post to UI
    setPosts([post, ...posts]);
  };

  return (
    <div className={styles.app}>
      <Header
        login={() => {
          openModalType('login');
        }}
        username={user ? user.username : null}
        logout={signout}
      />
      <Form addPost={addPost} />
      <PostList posts={posts} onDelete={deletePost} />
      {showModal && (
        <ModalContext.Provider value={{ modalType, openModalType, closeModal }}>
          <Modal
            verifyUser={userService.confirmSignup}
            signup={signup}
            signin={signin}
          />
        </ModalContext.Provider>
      )}
    </div>
  );
}

export default App;
