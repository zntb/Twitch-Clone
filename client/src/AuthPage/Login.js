import React, { useState } from 'react';
import { Logo } from './Logo';
import { AuthInput } from './AuthInput';

export const Login = ({ switchAuthHandler }) => {
  const [formState, setFormState] = useState({
    email: {
      value: '',
      isValid: false,
      showError: false,
    },
    password: {
      value: '',
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  console.log(formState);

  return (
    <div className="login-container">
      <Logo text={'Log in to Clone'} />
      <form className="auth-form">
        <AuthInput
          field={'email'}
          label={'Email'}
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
        />
        <AuthInput
          field={'password'}
          label={'Password'}
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
        />
        <button>Log In</button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Don't have an account? Sign up
      </span>
    </div>
  );
};
