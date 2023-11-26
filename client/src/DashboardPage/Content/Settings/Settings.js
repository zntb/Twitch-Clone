import React from 'react';
import { StreamKey } from './StreamKey';

const channelSettings = {
  title: 'title',
  description: 'description',
  avatarUrl: 'none',
  username: 'John',
  streamKey: '1234',
};

export const Settings = () => {
  return (
    <div className="settings-container">
      <span>Settings</span>
      <StreamKey streamKey={channelSettings.streamKey} />
    </div>
  );
};
