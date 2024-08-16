import { createClient } from '@/utils/supabase/server';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const supabase = createClient();
    const { name, email, phone } = req.body;

    const { error } = await supabase.from('Client').insert([{ name, email, phone }]);

    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ message: 'Data submitted successfully!' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
