const submitForm = async (handler, ...args) => {
  try {
    await handler(...args);
  } catch (error) {
    throw error;
  }
};

export default submitForm;
