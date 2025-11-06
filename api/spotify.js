// Serverless function (Vercel) to proxy Spotify API securely
// Expects env vars: SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN

import queryString from 'query-string';

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const LAST_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played';

async function getAccessToken() {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    return { error: true, status: response.status, text };
  }
  const data = await response.json();
  return { token: data.access_token };
}

export default async function handler(req, res) {
  try {
    const type = req.query.type === 'last' ? 'last' : 'now';
    const { token, error, status, text } = await getAccessToken();
    if (error || !token) {
      return res.status(status || 500).json({ error: 'token_error', detail: text || 'Failed to fetch token' });
    }

    const endpoint = type === 'now' ? NOW_PLAYING_ENDPOINT : LAST_PLAYED_ENDPOINT;
    const apiRes = await fetch(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (type === 'now' && apiRes.status === 204) {
      // nothing playing
      return res.status(204).end();
    }

    const payload = await apiRes.json();
    return res.status(apiRes.status).json(payload);
  } catch (e) {
    return res.status(500).json({ error: 'server_error', detail: e?.message || 'Unknown' });
  }
}

