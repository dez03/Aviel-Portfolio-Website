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
      <div className="flex items-center justify-center w-[320px] h-[190px] bg-[#0f1118] border border-[#1b1e27] rounded-3xl">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-400" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-[320px] h-[190px] bg-[#0f1118] border border-[#1b1e27] rounded-3xl p-4">
        <p className="text-gray-300 text-center px-4">{error}</p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 transition-colors text-white rounded"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!personalBest) {
    return (
      <div className="flex items-center justify-center w-[320px] h-[190px] bg-[#0f1118] border border-[#1b1e27] rounded-3xl">
        <p className="text-gray-300 text-center px-4">
          No personal best found for 15 seconds.
        </p>
      </div>
    );
  }

  /* ------------------------------------------------------------------ */
  /* pretty card                                                         */
  /* ------------------------------------------------------------------ */
  return (
    <a
      href="https://monkeytype.com/profile/dez03"
      target="_blank"
      rel="noopener noreferrer"
      className="focus:outline-none"
    >
      <div className="relative flex flex-col justify-between w-full h-[190px] rounded-3xl bg-[#0f1118] border border-[#1b1e27] p-6 overflow-hidden hover:border-[#e1b70e] transition-colors duration-200">
        {/* faint gigantic watermark number */}
        <span className="absolute -top-16 left-4 text-[200px] leading-none font-extrabold text-white/5 select-none pointer-events-none">
          {String(personalBest.wpm).padStart(3, "0")}
        </span>

        {/* pill label */}
        <div className="flex items-center gap-2 bg-[#161922] text-gray-300 text-xs font-medium px-3 py-1 rounded-full w-max shadow-inner">
          <TbKeyboard className="text-gray-400" size={14} />
          Typing speed
        </div>

        {/* main number */}
        <div className="flex items-baseline gap-1">
          <span className="text-white text-6xl font-bold leading-none">
            {personalBest.wpm}
          </span>
          <span className="text-gray-300 text-2xl font-medium mb-1">wpm</span>
        </div>

        {/* footer stats */}
        <div className="flex items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <FiClock size={14} /> 15s
          </div>
          <div className="flex items-center gap-1">
            <FiTarget size={14} /> {personalBest.acc}%
          </div>
          <div className="flex items-center gap-1">
            <FiGlobe size={14} /> ID
          </div>
        </div>
      </div>
    </a>
  );
};

export default MonkeyTypeDisplay;