import io from 'socket.io-client';

let socket;

export const connectWithSocketServer = () => {
  socket = io('http://localhost:5002');

  socket.on('connect', () => {
    console.log('succesfully connected socket.io');
    console.log(socket.id);
  });
};
