import React, { useEffect, useState } from "react";
import { getNowPlayingItem, getLastPlayedItem } from "../apis/SpotifyAPI";
import SpotifyLogo from "../assets/SpotifyLogo.png";

const SpotifyDisplay = () => {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;

    async function fetchSong() {
      setLoading(true);
      setError(null);
      try {
        // First try to get currently playing song
        const nowPlaying = await getNowPlayingItem();

        if (nowPlaying && nowPlaying.isPlaying) {
          setSong(nowPlaying);
        } else {
          // Fallback to last played song
          const lastPlayed = await getLastPlayedItem();
          setSong(lastPlayed);
        }
      } catch (error) {
        console.error("Error fetching song:", error);
        setError("Failed to fetch song data");
      } finally {
        setLoading(false);
      }
    }

    fetchSong();
    intervalId = setInterval(fetchSong, 60000); // Poll every minute

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-[250px] h-80 bg-gray-800 border border-gray-600 rounded-lg">
        <img
          className="w-10 h-10 mb-2 animate-spin"
          src={SpotifyLogo}
          alt="Spotify Logo"
        />
        <p className="text-gray-300 text-sm tracking-wider">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-[250px] h-80 bg-gray-800 border border-gray-600 rounded-lg">
        <img className="w-10 h-10 mb-2" src={SpotifyLogo} alt="Spotify Logo" />
        <p className="text-gray-300 text-sm tracking-wider">{error}</p>
      </div>
    );
  }

  if (!song) {
    return (
      <div className="flex flex-col items-center justify-center w-[250px] h-80 bg-gray-800 border border-gray-600 rounded-lg">
        <img className="w-10 h-10 mb-2" src={SpotifyLogo} alt="Spotify Logo" />
        <p className="text-gray-300 text-sm tracking-wider">
          No song currently playing
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[250px] h-80 bg-gray-800 border border-gray-600 rounded-lg overflow-hidden">
      <div className="relative w-full">
        <img
          className="w-6 h-6 absolute top-2 left-2 -rotate-45 z-10"
          src={SpotifyLogo}
          alt="Spotify Logo"
        />
        <img
          className="w-full h-48 object-cover"
          src={song.albumImageUrl}
          alt={`${song.title} album cover`}
        />
      </div>
      <div className="flex flex-col justify-center items-center flex-1 p-4 text-center">
        <a
          className="text-gray-300 hover:text-white font-medium truncate w-full mb-1"
          href={song.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {song.title}
        </a>
        <p className="text-gray-400 text-sm truncate w-full">{song.artist}</p>
      </div>
    </div>
  );
};

export default SpotifyDisplay;
