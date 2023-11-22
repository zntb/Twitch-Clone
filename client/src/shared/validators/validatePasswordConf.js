export const validatePasswordConf = (pass, confPass) => {
  return pass === confPass;
};

export const passwordConfValidationMessage = "Passwords don't match!!";
