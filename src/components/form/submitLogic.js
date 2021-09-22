/**
 * This function is the business logic for adding post on form submit.
 */

const submitForm = async (inputVal, addPost) => {
  try {
    await addPost(inputVal);
  } catch (error) {
    throw error;
  }
};

export default submitForm;
