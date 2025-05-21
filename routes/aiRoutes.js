import express from 'express';
import { generateCaptionAndVibe } from '../controllers/aiController.js';

const router = express.Router();

router.post('/caption', generateCaptionAndVibe);

export default router;
