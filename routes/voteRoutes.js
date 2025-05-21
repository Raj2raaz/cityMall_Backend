import express from 'express';
import { voteMeme } from '../controllers/voteController.js';

const router = express.Router();

router.post('/:id', voteMeme);

export default router;
