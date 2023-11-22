export const validateEmail = (email) => {
  // username should have between 3 or 8 characters without spaces
  const regex = /^\S+@\S+\.\S+$/;

  return regex.test(email);
};

export const emailValidationMessage = 'Please enter a valid email address!';
