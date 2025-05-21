import { generateCaption, generateVibe } from '../services/geminiService.js';

export const generateCaptionAndVibe = async (req, res) => {
  const { tags } = req.body;
  try {
    const caption = await generateCaption(tags);
    const vibe = await generateVibe(tags);
    res.status(200).json({ caption, vibe });
  } catch (err) {
    res.status(500).json({ error: 'AI generation failed', fallback: 'YOLO to the moon!' });
  }
};
