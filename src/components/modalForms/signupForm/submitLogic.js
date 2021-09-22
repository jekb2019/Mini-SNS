/**
 * Returns true if sign up successful false otherwise
 */

const submitForm = async (signup, username, email, password) => {
  try {
    await signup(username, email, password);
  } catch (error) {
    throw error;
  }
};

export default submitForm;
