import React, { useState } from 'react';
import {
  avatarUrlValidationMessage,
  descriptionValidationMessage,
  titleValidationMessage,
  usernameValidationMessage,
  validateAvatarUrl,
  validateDescription,
  validateTitle,
  validateUsername,
} from '../../../shared/validators';
import { Input } from '../../../shared/components/Input.js';

const inputs = [
  {
    field: 'username',
    label: 'Username',
    validationMessage: usernameValidationMessage,
    type: 'text',
  },
  {
    field: 'title',
    label: 'Title',
    validationMessage: titleValidationMessage,
    type: 'text',
  },
  {
    field: 'avatarUrl',
    label: 'Avatar Url',
    validationMessage: avatarUrlValidationMessage,
    type: 'text',
  },
  {
    field: 'description',
    label: 'Description',
    validationMessage: descriptionValidationMessage,
    type: 'text',
    textarea: true,
  },
];

export const ChannelSettings = ({ settings }) => {
  const [formState, setFormState] = useState({
    title: {
      isValid: false,
      showError: false,
      value: settings.title,
    },
    username: {
      isValid: false,
      showError: false,
      value: settings.username,
    },
    avatarUrl: {
      isValid: false,
      showError: false,
      value: settings.avatarUrl,
    },
    description: {
      isValid: false,
      showError: false,
      value: settings.description,
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

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;

    switch (field) {
      case 'username':
        isValid = validateUsername(value);
        break;
      case 'avatarUrl':
        isValid = validateAvatarUrl(value);
        break;
      case 'title':
        isValid = validateTitle(value);
        break;
      case 'description':
        isValid = validateDescription(value);
        break;
      default:
        break;
    }

    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  return (
    <form className="settings-form">
      {inputs.map((input) => (
        <Input
          key={input.field}
          field={input.field}
          label={input.label}
          value={formState[input.field].value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState[input.field].showError}
          validationMessage={input.validationMessage}
          type={input.type}
          textarea={input.textarea}
        />
      ))}
    </form>
  );
};
