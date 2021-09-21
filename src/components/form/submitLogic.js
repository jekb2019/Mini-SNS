/**
 * This function is the business logic for adding post on form submit.
 */

const submitForm = async (inputVal, inputRef, addPost, setInputValByVal) => {
  if (inputVal === '') {
    inputRef.current.focus();
  } else {
    await addPost(inputVal);
    inputRef.current.value = '';
    setInputValByVal('');
  }
};

export default submitForm;
