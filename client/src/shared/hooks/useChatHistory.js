import { useEffect } from 'react';
import { getChatHistory } from '../../socketConn/socketConn';

export const useChatHistory = (channelId) => {
  useEffect(() => {
    getChatHistory(channelId);
  }, []);

  return {
    messages: [],
    sendMessage: () => {},
  };
};
