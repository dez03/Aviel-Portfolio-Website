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
    intervalId = setInterval(fetchSong, 120000); // Fetch every 2 minutes

    return () => clearInterval(intervalId);
  }, []);

  // if loading, display loading message
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

  // If there is an error or no song is playing
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-[250px] h-80 bg-gray-800 border border-gray-600 rounded-lg">
        <img className="w-10 h-10 mb-2" src={SpotifyLogo} alt="Spotify Logo" />
        <p className="text-gray-300 text-sm tracking-wider">{error}</p>
      </div>
    );
  }
  // If there is an error or no song is playing
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
    <div className="flex flex-col w-[250px] h-80 bg-[#0e1118] rounded-2xl overflow-hidden shadow-[0px_4px_10px_rgba(0,0,0,0.5)]">
      <div className="relative w-full flex justify-center pt-4">
        {/* Vinyl record effect with album art */}
        <div className="relative w-48 h-48">
          {/* Center hole of vinyl */}
          <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-gray-800 rounded-full -translate-x-1/2 -translate-y-1/2 z-20" />
          {/* Album art */}
          <img
            className={`absolute w-full h-full rounded-full object-cover ${
              song.isPlaying ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "15s" }}
            src={song.albumImageUrl}
            alt={`${song.title} album cover`}
          />

    
          {/* Spotify logo */}
          <img
            className="w-6 h-6 absolute top-0 left-0 z-10"
            src={SpotifyLogo}
            alt="Spotify Logo"
          />
        </div>
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
        <p className="text-gray-400 text-xs mt-1">{song.message}</p>
      </div>
    </div>
  );
};

export default SpotifyDisplay;
