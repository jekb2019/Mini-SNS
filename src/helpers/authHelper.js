export const filterCognitoUser = (cognitoUser) => {
  const {
    username,
    attributes: { email },
  } = cognitoUser;
  return { username, email };
};

export const verifyUser = async (userService, username, code) => {
  try {
    await userService.confirmSignup(username, code);
    return true;
  } catch (error) {
    return false;
  }
};
