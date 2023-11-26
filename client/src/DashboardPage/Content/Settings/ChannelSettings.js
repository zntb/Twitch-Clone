import React from 'react';
import { usernameValidationMessage } from '../../../shared/validators';

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
    validationMessage: 'title validation message',
    type: 'text',
  },
  {
    field: 'avatarUrl',
    label: 'Avatar Url',
    validationMessage: 'avatar url validation message',
    type: 'text',
  },
  {
    field: 'description',
    label: 'Description',
    validationMessage: 'description validation message',
    type: 'text',
    textarea: true,
  },
];

export const ChannelSettings = () => {
  return <form className="settings-form"></form>;
};
