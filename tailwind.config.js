module.exports = {
  content: [
    "./index.html", // Ensure this points to your HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Big Shoulders Display", "serif"],
      },
    },
  },
  plugins: [],
};