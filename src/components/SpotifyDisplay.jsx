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
      <div className="flex flex-col items-center justify-center w-full h-[140px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <img className="w-8 h-8 mb-2 animate-spin" src={SpotifyLogo} alt="Spotify Logo" />
        <p className="text-gray-400 text-xs tracking-wider">Loading...</p>
      </div>
    );
  }

  // If there is an error or no song is playing
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[140px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <img className="w-8 h-8 mb-2" src={SpotifyLogo} alt="Spotify Logo" />
        <p className="text-gray-400 text-xs tracking-wider">{error}</p>
      </div>
    );
  }
  // If there is an error or no song is playing
  if (!song) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[140px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <img className="w-8 h-8 mb-2" src={SpotifyLogo} alt="Spotify Logo" />
        <p className="text-gray-400 text-xs tracking-wider">No song currently playing</p>
      </div>
    );
  }

  /* ------------------------------------------------------------------ */
  /* pretty card                                                         */
  /* ------------------------------------------------------------------ */
  const playingLabel = song.isPlaying ? "Now playing" : "Last played";

  return (
    <a href={song.songUrl} target="_blank" rel="noopener noreferrer" className="focus:outline-none block group">
      <div className="relative flex items-center w-full h-[140px] rounded-2xl bg-white/5 border border-white/10 px-6 py-5 overflow-hidden hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* vinyl record */}
        <div className="relative flex-shrink-0 w-24 h-24 z-10">
          <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-primary-400/40 transition-colors"></div>
          <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-[#0a0a0a] rounded-full -translate-x-1/2 -translate-y-1/2 z-20 border-2 border-white/10"></div>
          {/* album art spinning */}
          <img
            src={song.albumImageUrl}
            alt={`${song.title} album cover`}
            className={`absolute inset-0 w-full h-full rounded-full object-cover ${
              song.isPlaying ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "10s" }}
          />
        </div>

        {/* song info */}
        <div className="ml-6 flex flex-col overflow-hidden flex-1 z-10">
          <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">{playingLabel}</span>
          <span className="text-white font-semibold text-lg leading-tight truncate mb-1 group-hover:text-primary-400 transition-colors">
            {song.title}
          </span>
          <span className="text-gray-400 text-sm truncate">
            {song.artist}
          </span>
        </div>

        {/* spotify badge */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-[#1ed760]/20 group-hover:border-[#1ed760]/40 transition-all z-10">
          <img src={SpotifyLogo} alt="Spotify" className="w-5 h-5" />
        </div>
      </div>
    </a>
  );
};

export default SpotifyDisplay;
