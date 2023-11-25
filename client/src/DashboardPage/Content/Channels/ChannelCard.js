import React from 'react';

const imageUrl =
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1297900/header.jpg?t=1696415199';

const ChannelAvatar = ({ url }) => {
  return (
    <div className="channels-avatar-container">
      <img
        src={url || imageUrl}
        alt="Channel Avatar"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export const ChannelCard = ({
  title,
  id,
  username,
  isOnline,
  avatarUrl,
  navigateToChannelHandler,
}) => {
  const handleNavigate = () => {
    navigateToChannelHandler();
  };

  return (
    <div className="channels-card" onClick={handleNavigate}>
      <ChannelAvatar url={avatarUrl} />
      <span className="channels-card-title">{title}</span>
      <span className="channels-card-text">{username}</span>
      <span
        className="channels-card-text"
        style={{ color: isOnline ? 'green' : 'red' }}
      >
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};
