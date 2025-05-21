import { Server } from 'socket.io';

export const setupSockets = (server) => {
  const io = new Server(server, { cors: { origin: '*' } });

  io.on('connection', (socket) => {
    console.log('A user connected');
  });

  server.on('request', (req, res) => {
    req.io = io;
  });
};
