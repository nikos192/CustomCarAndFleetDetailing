const PLACE_ID = 'ChIJ_w7XibnQCAYRV5SDkN9nK4o';
const API_KEY  = 'AIzaSyBfkFdzUkiSNVHnBTf3K2jcgDNb3OT3gUI';
const FIELDS   = 'name,rating,user_ratings_total,reviews,url';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=${FIELDS}&key=${API_KEY}`;
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
