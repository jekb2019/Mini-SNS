import styles from './App.module.css';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import Modal from './components/modal/Modal';
import { ModalContext } from './context/ModalContext';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { filterCognitoUser } from './util/auth';
import Forum from './pages/forum/Forum';
import UserUIWrapper from './components/userUIWrapper/UserUIWrapper';

Amplify.configure(awsconfig);

function App({ postService, userService }) {
  const [user, setUser] = useState(null);

  /**
   * Get current user from AWS Cognito (App.jsx)
   */
  useEffect(() => {
    const getUserInfo = () => {
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
    };
    getUserInfo();
  }, [userService]);

  // App.jsx
  const signup = async (username, email, password) => {
    try {
      await userService.signup(username, email, password);
    } catch (error) {
      throw error;
    }
  };

  // App.jsx
  const signin = async (username, password) => {
    try {
      const user = await userService.login(username, password);
      setUser(filterCognitoUser(user));
    } catch (error) {
      throw error;
    }
  };

  // App.jsx
  const signout = async () => {
    try {
      userService.signout();
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className={styles.app}>
      <UserUIWrapper
        verifyUser={userService.confirmSignup}
        signup={signup}
        signin={signin}
        signout={signout}
        user={user}
      />
      <Forum user={user} postService={postService} />
    </div>
  );
}

export default App;
