import { supabase } from '../services/supabaseClient.js';

export const placeBid = async (req, res) => {
  try {
    console.log('[Incoming Bid]', req.body);

    const { meme_id, credits } = req.body;
    const user_id = 'cyberpunk420';

    const { data, error } = await supabase
      .from('bids')
      .insert([{ meme_id, user_id, credits }])
      .select();

    if (error) {
      console.error('[Supabase Bid Error]', error);
      return res.status(500).json({ error: error.message });
    }

    if (global._io) {
      global._io.emit('newBid', { meme_id, user_id, credits });
    }

    res.status(201).json(data[0]);
  } catch (err) {
    console.error('[Server Error]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
