import queryString from 'query-string';

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const LAST_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played';

const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID
const client_secret = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET
const refresh_token = import.meta.env.VITE_APP_SPOTIFY_REFRESH_TOKEN

const getAccessToken = async () => {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: queryString.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });
    return response.json();
};

// now playing endpoint
export const getNowPlaying = async (client_id, client_secret, refresh_token) => {
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    });
};

// last played endpoint
export const getLastPlayed = async (client_id, client_secret, refresh_token) => {
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);
    return fetch(LAST_PLAYED_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    });
};

// return data
export default async function getNowPlayingItem(client_id, client_secret, refresh_token) {
  try {
      const response = await getNowPlaying(client_id, client_secret, refresh_token);
      if (!response.ok || response.status === 204) { // Handles 204 and other error codes
          console.error(`Spotify API Error: ${response.status}`);
          return false;
      }
      const song = await response.json();

      const albumImageUrl = song.item?.album.images[0]?.url || '';
      const artist = song.item?.artists.map((_artist) => _artist.name).join(', ') || 'Unknown Artist';
      const isPlaying = song.is_playing;
      const songUrl = song.item?.external_urls?.spotify || '';
      const title = song.item?.name || 'Unknown Title';

      return {
          albumImageUrl,
          artist,
          isPlaying,
          songUrl,
          title,
      };
  } catch (error) {
      console.error('Error fetching now playing data:', error);
      return false; // Fallback in case of failure
  }
}
