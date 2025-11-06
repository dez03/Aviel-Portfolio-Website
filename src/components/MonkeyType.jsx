import React, { useEffect, useState } from "react";
import fetchAndUpdateBest from "../apis/MonkeyTypeApi.js";

/* icons */
import { TbKeyboard } from "react-icons/tb";
import { FiClock, FiTarget, FiGlobe } from "react-icons/fi";

const MonkeyTypeDisplay = () => {
  const [personalBest, setPersonalBest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ------------------------------------------------------------------ */
  /* data fetch                                                          */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const getPersonalBest = async () => {
      setLoading(true);
      setError(null);

      try {
        // Try retrieving from localStorage first
        const storedBest = localStorage.getItem("fifteenSecondBest");
        let best = storedBest ? JSON.parse(storedBest) : null;

        // Always fetch latest data
        const latestBest = await fetchAndUpdateBest();

        // Update if the new score is better
        if (latestBest) {
          if (!best || latestBest.wpm > best.wpm) {
            best = latestBest;
            localStorage.setItem("fifteenSecondBest", JSON.stringify(best));
          }
        }

        setPersonalBest(best);
      } catch (err) {
        console.error("Error retrieving personal best:", err);
        setError("Failed to load personal best. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getPersonalBest();
  }, []);

  /* ------------------------------------------------------------------ */
  /* skeleton + error states                                             */
  /* ------------------------------------------------------------------ */
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-[190px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-400" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[190px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4">
        <p className="text-gray-300 text-center px-4">{error}</p>
        <button className="mt-4 px-4 py-2 bg-primary-500 hover:bg-primary-600 transition-colors text-white rounded-lg" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  if (!personalBest) {
    return (
      <div className="flex items-center justify-center w-full h-[190px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <p className="text-gray-300 text-center px-4">No personal best found for 15 seconds.</p>
      </div>
    );
  }

  /* ------------------------------------------------------------------ */
  /* pretty card                                                         */
  /* ------------------------------------------------------------------ */
  return (
    <a href="https://monkeytype.com/profile/dez03" target="_blank" rel="noopener noreferrer" className="focus:outline-none block group">
      <div className="relative flex flex-col justify-between w-full h-[190px] rounded-2xl bg-white/5 border border-white/10 p-6 overflow-hidden hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="absolute -top-16 left-4 text-[180px] leading-none font-extrabold text-white/5 select-none pointer-events-none">
          {String(personalBest.wpm).padStart(3, "0")}
        </span>
        <div className="relative flex items-center gap-2 bg-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full w-max border border-white/10">
          <TbKeyboard className="text-primary-400" size={14} />
          <span>Typing speed</span>
        </div>
        <div className="relative flex items-baseline gap-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan text-6xl font-bold leading-none">
            {personalBest.wpm}
          </span>
          <span className="text-gray-300 text-2xl font-medium mb-1">wpm</span>
        </div>
        <div className="relative flex items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-1.5"><FiClock size={14} className="text-primary-400/60" /> <span>15s</span></div>
          <div className="flex items-center gap-1.5"><FiTarget size={14} className="text-primary-400/60" /> <span>{personalBest.acc}%</span></div>
          <div className="flex items-center gap-1.5"><FiGlobe size={14} className="text-primary-400/60" /> <span>ENG</span></div>
        </div>
      </div>
    </a>
  );
};

export default MonkeyTypeDisplay;