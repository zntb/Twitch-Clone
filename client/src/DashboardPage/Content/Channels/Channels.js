import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChannelCard } from './ChannelCard';

// export const dummyChannels = [
//   {
//     id: 1,
//     title: 'test',
//     avatarUrl: null,
//     username: 'John',
//     isOnline: false,
//   },
//   {
//     id: 2,
//     title: 'test2',
//     avatarUrl: null,
//     username: 'Bob',
//     isOnline: true,
//   },
//   {
//     id: 3,
//     title: 'test3',
//     avatarUrl: null,
//     username: 'Loren',
//     isOnline: false,
//   },
//   {
//     id: 4,
//     title: 'test4',
//     avatarUrl: null,
//     username: 'Lara',
//     isOnline: true,
//   },
// ];
export const Channels = ({ channels }) => {
  const navigate = useNavigate();

  const handleNavigateToChannel = (id) => {
    navigate(`/channel/${id}`);
  };

  return (
    <div className="channels-container">
      {channels.map((channel) => (
        <ChannelCard
          key={channel.id}
          id={channel.id}
          title={channel.title}
          username={channel.username}
          isOnline={channel.isOnline}
          avatarUrl={channel.avatarUrl}
          navigateToChannelHandler={handleNavigateToChannel}
        />
      ))}
    </div>
  );
};
