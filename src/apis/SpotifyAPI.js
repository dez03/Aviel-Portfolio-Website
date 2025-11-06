import queryString from "query-string";

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_APP_SPOTIFY_REFRESH_TOKEN;

// Optional proxy URL for production (serverless function)
const PROXY_URL = import.meta.env.VITE_DEPLOYED_SPOTIFY_PROXY_URL ||
  (typeof window !== 'undefined' ? `${window.location.origin}/api/spotify` : undefined);

// Fetch access token using refresh token
let accessToken = null; // Store the token
let tokenExpiry = 0;    // Token expiry timestamp

const getAccessToken = async () => {
  // Use cached token if it’s still valid
  if (accessToken && Date.now() < tokenExpiry) {
    return accessToken;
  }

  try {
    // In production, use proxy to avoid exposing client secret and CORS issues
    if (import.meta.env.PROD && PROXY_URL) {
      return null; // token handled on server, client won't request token directly
    }
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

    if (!response.ok) {
      console.error(`Error fetching access token: ${response.status}`);
      return null;
    }

    const data = await response.json();
    accessToken = data.access_token;
    tokenExpiry = Date.now() + data.expires_in * 1000; // Calculate expiry
    return accessToken;
  } catch (error) {
    console.error("Error in getAccessToken:", error);
    return null;
  }
};

// Fetch now playing data
export const getNowPlaying = async () => {
  try {
    if (import.meta.env.PROD && PROXY_URL) {
      const response = await fetch(`${PROXY_URL}?type=now`);
      return response;
    }

    const access_token = await getAccessToken();
    if (!access_token) {
      console.error("Failed to retrieve access token for Now Playing.");
      return null;
    }

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (!response.ok) {
      console.error(`Error fetching Now Playing: ${response.status}`);
      return null;
    }

    return response;
  } catch (error) {
    console.error("Error in getNowPlaying:", error);
    return null;
  }
};

// Fetch last played data
export const getLastPlayed = async () => {
  try {
    if (import.meta.env.PROD && PROXY_URL) {
      const response = await fetch(`${PROXY_URL}?type=last`);
      return response;
    }

    const access_token = await getAccessToken();
    if (!access_token) {
      console.error("Failed to retrieve access token for Last Played.");
      return null;
    }

    const response = await fetch(LAST_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (!response.ok) {
      console.error(`Error fetching Last Played: ${response.status}`);
      return null;
    }

    return response;
  } catch (error) {
    console.error("Error in getLastPlayed:", error);
    return null;
  }
};

// Parse now playing data
export const getNowPlayingItem = async () => {
  try {
    const response = await getNowPlaying();
    if (!response || response.status === 204) {
      console.warn("No song is currently playing.");
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
    console.error("Error parsing Now Playing data:", error);
    return null;
  }
};

// Parse last played data
export const getLastPlayedItem = async () => {
  try {
    const response = await getLastPlayed();
    if (!response || !response.ok) {
      console.error(`Error fetching Last Played: ${response?.status || "Unknown"}`);
      return null;
    }

    const data = await response.json();
    const track = data.items?.[0];

    if (!track) {
      console.warn("No recently played track found.");
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
    console.error("Error parsing Last Played data:", error);
    return null;
  }
};
