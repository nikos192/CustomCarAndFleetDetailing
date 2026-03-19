const PLACE_ID = 'ChIJ_w7XibnQCAYRV5SDkN9nK4o';
const FIELDS   = 'name,rating,user_ratings_total,reviews,url';

const ALLOWED_ORIGINS = [
  'https://customcarandfleetdetailing.com.au',
  'https://www.customcarandfleetdetailing.com.au',
];

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Vary', 'Origin');

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'api_key_not_configured' });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=${FIELDS}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      return res.status(502).json({ error: data.status });
    }

    // Cache for 1 hour on Vercel edge
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json(data.result);
  } catch (err) {
    res.status(500).json({ error: 'fetch_failed' });
  }
}
