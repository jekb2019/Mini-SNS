export const filterCognitoUser = (cognitoUser) => {
  const {
    username,
    attributes: { email },
  } = cognitoUser;
  return { username, email };
};
