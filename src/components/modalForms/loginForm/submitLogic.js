/**
 * Return true if sign in successful false otherwise
 */
const submitForm = async (signin, username, password) => {
  try {
    await signin(username, password);
  } catch (error) {
    return false;
  }
  return true;
};

export default submitForm;
