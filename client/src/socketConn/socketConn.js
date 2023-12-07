import io from 'socket.io-client';
import { useStore } from '../store';

let socket;

export const connectWithSocketServer = () => {
  socket = io('http://localhost:5002');

  socket.on('connect', () => {
    console.log('successfully connected with socket.io server');
    console.log(socket.id);
  });

  socket.on('chat-history', (chatHistory) => {
    const { setChatHistory } = useStore.getState();

    setChatHistory(chatHistory);
  });

  socket.on('chat-message', (chatMessage) => {
    console.log('new message came');
    console.log(chatMessage);
  });
};

export const getChatHistory = (channelId) => {
  socket.emit('chat-history', channelId);
};

export const sendChatMessage = (toChannel, message) => {
  socket.emit('chat-message', {
    toChannel,
    message,
  });
};

export const closeChatSubscription = (channelId) => {
  socket.emit('chat-unsubscribe', channelId);
};
