const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./index.html", // Ensure this points to your HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      keyframes: {
        draw: {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        draw: "draw 2s linear forwards",
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      fontFamily: {
        big_shoulders: ["Big Shoulders Display", "serif"],
        dm_sans: ["DM Sans", "serif"],
      },
    },
  },
  plugins: [],
};
