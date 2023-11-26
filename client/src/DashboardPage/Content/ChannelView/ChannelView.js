import React from 'react';
import { Chat } from '../ChannelView/Chat/Chat.js';
import { ChannelDescription } from './ChannelDescription.js';

export const ChannelView = () => {
  return (
    <div className="channel-container">
      <div className="channel-video-description-container">
        <div className="channel-offline-placeholder">
          <span>Channel is offline</span>
        </div>
        <ChannelDescription />
      </div>
      <Chat />
    </div>
  );
};
