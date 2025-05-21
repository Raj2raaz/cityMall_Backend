import { supabase } from '../services/supabaseClient.js';

export const createMeme = async (req, res) => {
  try {
    const { title, image_url, tags } = req.body;

    const { data, error } = await supabase
      .from('memes')
      .insert([{ title, image_url, tags, upvotes: 0, owner_id: 'cyberpunk420' }])
      .select(); 

    if (error) {
      console.error('[Supabase Error]', error);
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json(data?.[0] ?? { message: 'Meme created, no row returned' });
  } catch (err) {
    console.error('[Server Error]', err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};

export const getMemes = async (req, res) => {
  const { data, error } = await supabase.from('memes').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
};
