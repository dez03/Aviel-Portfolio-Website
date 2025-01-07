import queryString from "query-string";

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_APP_SPOTIFY_REFRESH_TOKEN;

// Fetch access token using refresh token
const getAccessToken = async () => {
  try {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString(
      "base64"
    );
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

    if (!response.ok) {
      console.error(`Error fetching access token: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error in getAccessToken:", error);
    return null;
  }
};

// Fetch now playing data
export const getNowPlaying = async () => {
  const access_token = await getAccessToken();
  if (!access_token) return null;

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response;
};

// Fetch last played data
export const getLastPlayed = async () => {
  const access_token = await getAccessToken();
  if (!access_token) return null;

  const response = await fetch(LAST_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response;
};

// Parse now playing data
export const getNowPlayingItem = async () => {
  try {
    const response = await getNowPlaying();
    if (!response.ok || response.status === 204) {
      console.error(`Spotify API Error (Now Playing): ${response.status}`);
      return null;
    }

    const song = await response.json();
    return {
      albumImageUrl: song.item?.album.images[0]?.url || "",
      artist:
        song.item?.artists.map((artist) => artist.name).join(", ") ||
        "Unknown Artist",
      isPlaying: song.is_playing,
      songUrl: song.item?.external_urls?.spotify || "",
      title: song.item?.name || "Unknown Title",
      message: "Currently playing",
    };
  } catch (error) {
    console.error("Error parsing now playing data:", error);
    return null;
  }
};

// Parse last played data
export const getLastPlayedItem = async () => {
  try {
    const response = await getLastPlayed();
    if (!response.ok) {
      console.error(`Spotify API Error (Last Played): ${response.status}`);
      return null;
    }

    const data = await response.json();
    const track = data.items?.[0]; // Most recently played track

    if (!track) {
      console.error("No recently played track found.");
      return null;
    }

    return {
      albumImageUrl: track.track.album?.images[0]?.url || "",
      artist:
        track.track.artists.map((artist) => artist.name).join(", ") ||
        "Unknown Artist",
      songUrl: track.track.external_urls?.spotify || "",
      title: track.track.name || "Unknown Title",
      message: "Last played",
    };
  } catch (error) {
    console.error("Error parsing last played data:", error);
    return null;
  }
};
