import { supabase } from '../services/supabaseClient.js';

export const voteMeme = async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;

  const { error } = await supabase.rpc('vote_meme', {
    meme_id: id,
    vote_type: type
  });

  if (error) {
    console.error('[Supabase RPC Error]', error);
    return res.status(500).json({ error: error.message });
  }

  if (global._io) {
    global._io.emit('voteUpdate', { meme_id: id, voteType: type });
  }

  res.status(200).json({ success: true });
};
