import { Server } from 'socket.io';

export const setupSockets = (server) => {
  const io = new Server(server, {
    cors: {
      origin: [
        'http://localhost:5173',
        'https://citymall-subham.netlify.app', 
      ],
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });

    socket.on('customEvent', (data) => {
      console.log('Received:', data);
    });
  });

  global._io = io;
};
