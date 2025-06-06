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

  /* ------------------------------------------------------------------ */
  /* pretty card                                                         */
  /* ------------------------------------------------------------------ */
  const playingLabel = song.isPlaying ? "Now playing" : "Last played";

  return (
    <a
      href={song.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="focus:outline-none"
    >
      <div className="group relative flex items-center w-full h-[120px] rounded-3xl bg-[#0f1118] border border-[#1b1e27] px-5 py-4 overflow-hidden hover:border-[#1ed760]/60 transition-colors duration-200">
        {/* vinyl record */}
        <div className="relative flex-shrink-0 w-20 h-20">
          {/* center hole */}
          <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-gray-900 rounded-full -translate-x-1/2 -translate-y-1/2 z-20" />
          {/* album art spinning */}
          <img
            src={song.albumImageUrl}
            alt={`${song.title} album cover`}
            className={`absolute w-full h-full rounded-full object-cover ${
              song.isPlaying ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "10s" }}
          />
        </div>

        {/* song info */}
        <div className="ml-5 flex flex-col overflow-hidden">
          <span className="text-gray-400 text-sm font-medium">{playingLabel}</span>
          <span className="text-gray-100 font-semibold text-lg leading-tight truncate max-w-[190px]">
            {song.title}
          </span>
          <span className="text-gray-400 text-sm truncate max-w-[190px]">
            {song.artist}
          </span>
        </div>

        {/* circular spotify badge top‑right, matches screenshot */}
        <div className="absolute top-3 right-4 w-8 h-8 rounded-full bg-[#161922] flex items-center justify-center">
          <img
            src={SpotifyLogo}
            alt="Spotify"
            className="w-5 h-5 absolute filter brightness-0 invert transition duration-200 group-hover:filter-none"
          />
        </div>
      </div>
    </a>
  );
};

export default SpotifyDisplay;
