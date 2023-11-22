export const validateUsername = (username) => {
  // username should have between 3 or 8 characters without spaces
  // const regex = /^\S{3,8}$/;
  const regex = /^[0-9A-Za-z]{3,8}$/;

  return regex.test(username);
};

export const usernameValidationMessage =
  'Username should have between 3 and 8 characters. Spaces and special characters not allowed.';
