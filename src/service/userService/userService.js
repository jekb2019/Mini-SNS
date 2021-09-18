import { Auth } from 'aws-amplify';

export default class UserService {
  /**
   * If user logged in, return current user info.
   * If user NOT logged in, return null.
   */
  async getCurrentUser() {
    let currentUser;
    try {
      currentUser = await Auth.currentAuthenticatedUser();
    } catch (e) {
      currentUser = null;
    }
    return currentUser;
  }

  /**
   * Sign up user to the system
   */
  async signup(username, email, password) {
    try {
      const { user, userSub } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log(userSub);
      return user;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Confirm Signup
   */

  async confirmSignup(username, code) {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Resend confirmation code
   */
  async resendConfirmationCode(username) {
    try {
      await Auth.resendSignUp(username);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Log in user to the system
   */
  async login(username, password) {
    try {
      const user = await Auth.signIn(username, password);
      return user;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Sign out user from the system
   */
  async signout() {
    try {
      await Auth.signOut();
    } catch (error) {
      throw error;
    }
  }
}
