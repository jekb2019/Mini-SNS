import { Auth } from 'aws-amplify';

export default class UserService {
  constructor() {
    this.username = null;
  }

  async signup(username, email, password) {
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
      throw error;
    }
  }

  async login(username, password) {
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      return { username: user.username };
    } catch (error) {
      throw error;
    }
  }

  async signout() {
    try {
      await Auth.signOut();
    } catch (error) {
      throw error;
    }
  }
}
