import express from 'express';
import { placeBid } from '../controllers/bidController.js';

const router = express.Router();

router.post('/', placeBid);

export default router;
