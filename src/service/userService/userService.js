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
      return error;
    }
  }
}
