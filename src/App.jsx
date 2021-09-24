import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { filterCognitoUser } from './util/auth';
import Forum from './pages/forum/Forum';
import UserUIWrapper from './components/userUIWrapper/UserUIWrapper';

function App({ postService, userService }) {
  const [user, setUser] = useState(null);

  /**
   * Get current user from AWS Cognito
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
