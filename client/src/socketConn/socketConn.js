import io from 'socket.io-client';

let socket;

export const connectWithSocketServer = () => {
  socket = io('http://localhost:5002');

  socket.on('connect', () => {
    console.log('succesfully connected socket.io');
    console.log(socket.id);
  });

  socket.on('chat-history', (chatHistory) => {
    console.log(chatHistory);
    console.log('chat-history-came-from-the-server');
  });
};

export const getChatHistory = (channelId) => {
  socket.emit('chat-history', channelId);
};
