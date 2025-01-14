module.exports = {
  content: [
    "./index.html", // Ensure this points to your HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      keyFrames: {
        draw: {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        draw: "draw 2s linear forwards",
      },
      fontFamily: {
        big_shoulders: ["Big Shoulders Display", "serif"],
        dm_sans: ["DM Sans", "serif"],
      },
    },
  },
  plugins: [],
};