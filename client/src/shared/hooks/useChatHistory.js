import { useEffect } from 'react';
import {
  closeChatSubscription,
  getChatHistory,
  sendChatMessage,
} from '../../socketConn/socketConn';
import { useUserDetails } from './useUserDetails';

export const useChatHistory = (channelId) => {
  const { isLogged, username } = useUserDetails();

  useEffect(() => {
    getChatHistory(channelId);

    return () => {
      closeChatSubscription(channelId);
    };
  }, []);

  const sendMessage = (message) => {
    sendChatMessage(channelId, {
      author: isLogged ? username : 'Guest',
      content: message,
    });
  };

  return {
    messages: [],
    sendMessage,
  };
};
