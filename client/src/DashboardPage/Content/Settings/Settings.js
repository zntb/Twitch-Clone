import React from 'react';
import { StreamKey } from './StreamKey';
import { ChannelSettings } from './ChannelSettings';
import { PasswordSettings } from './PasswordSettings';
import { useChannelSettings } from '../../../shared/hooks/useChannelSettings';

const channelSettings = {
  title: 'title',
  description: 'description',
  avatarUrl: 'none',
  username: 'John',
  streamKey: '1234',
};

export const Settings = () => {
  const { channelSettings } = useChannelSettings();

  if (!channelSettings) {
    return <span>Fetching the data</span>;
  }

  return (
    <div className="settings-container">
      <span>Settings</span>
      <ChannelSettings settings={channelSettings} />
      <PasswordSettings />
      <StreamKey streamKey={channelSettings.streamKey} />
    </div>
  );
};
