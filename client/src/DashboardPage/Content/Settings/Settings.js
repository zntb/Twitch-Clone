import React from 'react';
import { StreamKey } from './StreamKey';
import { ChannelSettings } from './ChannelSettings';
import { PasswordSettings } from './PasswordSettings';
import { useChannelSettings } from '../../../shared/hooks/useChannelSettings';
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner';

const channelSettings = {
  title: 'title',
  description: 'description',
  avatarUrl: 'none',
  username: 'John',
  streamKey: '1234',
};

export const Settings = () => {
  const { channelSettings, isFetching, saveSettings } = useChannelSettings();

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="settings-container">
      <span>Settings</span>
      <ChannelSettings settings={channelSettings} saveSettings={saveSettings} />
      <PasswordSettings />
      <StreamKey streamKey={channelSettings.streamKey} />
    </div>
  );
};
