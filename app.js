import express from 'express';
import cors from 'cors';
import memeRoutes from './routes/memeRoutes.js';
import bidRoutes from './routes/bidRoutes.js';
import voteRoutes from './routes/voteRoutes.js';
import aiRoutes from './routes/aiRoutes.js';

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://citymall-subham.netlify.app',
];


app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json());

app.use('/memes', memeRoutes);
app.use('/bids', bidRoutes);
app.use('/votes', voteRoutes);
app.use('/ai', aiRoutes);

export default app;
