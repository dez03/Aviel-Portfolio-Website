import React, { useEffect, useState } from "react";
import fetchAndUpdateBest from "../apis/MonkeyTypeApi.js";

const MonkeyTypeDisplay = () => {
  const [personalBest, setPersonalBest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        
        // Update if we got new data and it's better than stored
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

  if (loading) {
    return (
      <div className="flex items-center justify-center w-[250px] h-80 bg-gray-800 border border-gray-600 rounded-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-300"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-[250px] h-80 bg-gray-800 border border-gray-600 rounded-lg">
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
      <div className="flex items-center justify-center w-[250px] h-80 bg-gray-800 border border-gray-600 rounded-lg">
        <p className="text-gray-300 text-center px-4">No personal best found for 15 seconds.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-around w-[250px] h-80 bg-gray-800 border border-gray-600 rounded-lg p-4">
      <h3 className="text-white font-bold text-lg">15-Second Personal Best</h3>
      <div className="space-y-3">
        <p className="text-gray-300 text-sm">
          <span className="font-semibold">WPM:</span> {personalBest.wpm}
        </p>
        <p className="text-gray-300 text-sm">
          <span className="font-semibold">Accuracy:</span> {personalBest.acc}%
        </p>
        <p className="text-gray-300 text-sm">
          <span className="font-semibold">Consistency:</span> {personalBest.consistency}%
        </p>
      </div>
      <p className="text-gray-300 text-xs">
        Achieved on: {new Date(personalBest.timestamp).toLocaleDateString()}
      </p>
    </div>
  );
};

export default MonkeyTypeDisplay;