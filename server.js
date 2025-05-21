import http from 'http';
import app from './app.js';
import { setupSockets } from './sockets/socketHandlers.js';

const PORT = process.env.PORT || 3001;
const server = http.createServer(app);

setupSockets(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
