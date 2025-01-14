module.exports = {
  content: [
    "./index.html", // Ensure this points to your HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      fontFamily: {
        big_shoulders: ["Big Shoulders Display", "serif"],
        dm_sans: ["DM Sans", "serif"],
      },
    },
  },
  plugins: [],
};