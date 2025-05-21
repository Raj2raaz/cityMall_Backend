import express from 'express';
import { createMeme, getMemes } from '../controllers/memeController.js';

const router = express.Router();

router.post('/', createMeme);
router.get('/', getMemes);

export default router;
