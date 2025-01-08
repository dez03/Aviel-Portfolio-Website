const fetchAndUpdateBest = async () => {
  const API_KEY = "Njc3ZDk5ZWIzM2VlMjdhYTEyYjU5MDdlLjJZRm5KdG9wRmJCRi1iaHg2Z0ctQmpQS3VEUnAtRTNq";
  const BASE_URL = "https://api.monkeytype.com";
  const ENDPOINT = "/users/personalBests";

  try {
    const response = await fetch(`${BASE_URL}${ENDPOINT}?mode=time`, {
      method: "GET",
      headers: {
        Authorization: `ApeKey ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    const fifteenSecondBests = data.data["15"];

    if (!fifteenSecondBests || fifteenSecondBests.length === 0) {
      console.log("No personal bests found for 15 seconds.");
      return null;
    }

    // Find the highest WPM in the "15" second results
    const personalBest = fifteenSecondBests.reduce(
      (best, current) => (current.wpm > best.wpm ? current : best),
      fifteenSecondBests[0] // Start with the first result instead of {wpm: 0}
    );

    // Log your current best
    console.log(`Current Personal Best for 15 seconds: ${personalBest.wpm} WPM`);

    // Return the personal best - this was missing before
    return personalBest;
  } catch (error) {
    console.error("Error fetching personal bests:", error);
    throw error; // Re-throw the error so the component can handle it
  }
};

export default fetchAndUpdateBest;