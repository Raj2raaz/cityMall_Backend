import express from 'express';
import cors from 'cors';
import memeRoutes from './routes/memeRoutes.js';
import bidRoutes from './routes/bidRoutes.js';
import voteRoutes from './routes/voteRoutes.js';
import aiRoutes from './routes/aiRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/memes', memeRoutes);
app.use('/bids', bidRoutes);
app.use('/votes', voteRoutes);
app.use('/ai', aiRoutes);

export default app;
