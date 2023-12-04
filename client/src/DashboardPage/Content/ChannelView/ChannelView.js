import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReactFlvPlayer } from 'react-flv-player';
import { Chat } from '../ChannelView/Chat/Chat.js';
import { ChannelDescription } from './ChannelDescription.js';
import { useChannelDetails } from '../../../shared/hooks/useChannelDetails.js';
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner.js';

export const Stream = ({ streamUrl }) => {
  return (
    <div className="channel-video-container">
      <ReactFlvPlayer width="100%" height="100%" url={streamUrl} />
    </div>
  );
};

export const ChannelView = ({ getChannels }) => {
  const { isFetching, getChannelDetails, channelDetails } = useChannelDetails();

  const { id } = useParams();

  useEffect(() => {
    getChannelDetails(id);
  }, []);

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="channel-container">
      <div className="channel-video-description-section">
        {/* <div className="channel-offline-placeholder">
          <span>Channel is offline</span>
        </div> */}
        <Stream streamUrl={channelDetails.streamUrl} />
        <ChannelDescription
          channelId={channelDetails.id}
          title={channelDetails.title}
          description={channelDetails.description}
          username={channelDetails.username}
          getChannels={getChannels}
        />
      </div>
      <Chat />
    </div>
  );
};
