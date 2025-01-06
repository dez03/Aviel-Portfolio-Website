import React, { useEffect, useState } from 'react';
import SpotifyLogo from '../assets/SpotifyLogo.png';
import getNowPlayingItem from '../apis/SpotifyAPI.js';

function SpotifyDisplay() {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    let intervalId;

    async function fetchSong() {
      setLoading(true); // Set loading state to true while fetching
      try {
        const data = await getNowPlayingItem(
          import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID,
          import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET,
          import.meta.env.VITE_APP_SPOTIFY_REFRESH_TOKEN
        );
        setSong(data);
      } catch (error) {
        console.error('Error fetching song:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    }
    fetchSong();

    // Setting up polling to fetch data every 10 seconds (change to 2 minutes)
    intervalId = setInterval(fetchSong, 10000);
  }, []);

  if (loading) {
    return (
      <div className="flex p-2 w-fit items-center justify-center text-gray text-base">
        <img className="w-fit p-1 object-contain h-fit" src={SpotifyLogo} alt="Spotify Logo" />
        <p className="tracking-wider px-1 text-base text-left">Loading...</p>
      </div>
    );
  }

  if (!song) {
    return <div>No song currently playing or an error occurred.</div>;
  }

  return (
    <div className="flex min-w-md w-[250px] h-80 items-center justify-center text-base border rounded-lg border-gray-dark bg-gray-dark font-GT_Flexa">
      {song.isPlaying ? (
        <div className="w-fit h-full py-2 flex flex-col text-left justify-around">
          <div className="w-full h-fit relative">
            <img
              className="w-fit h-6 p-1 object-contain absolute -rotate-45 z-10"
              src={SpotifyLogo}
              alt="Spotify Logo"
            />
            <img
              className="w-fit h-fit rounded-lg"
              src={song.albumImageUrl}
              alt="Album Cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <div>
              <a
                className="px-1 text-left underline"
                href={song.songUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {song.title}
              </a>
            </div>
            <div>
              <p className="px-1 text-left">{song.artist}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>I am not listening to music right now!</p>
      )}
    </div>
  );
}

export default SpotifyDisplay;