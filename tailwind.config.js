/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "2rem",
        slg: "2rem",
        lg: "1.25rem",
        xl: "6.25rem",
      },
    },
    extend: {
      screens: {
        md: "768px", // Custom size for medium screens
        slg: "1024px", // Custom size for smaller laptop screens
        lg: "1280px", // Custom size for laptop screens
        xl: "1440px", // Custom size for extra-large screens
      },
      fontFamily: {
        hellix: ["var(--font-hellix)"],
      },
      colors: {
        wiseNestPink: "#DE4B99",
        wiseNestBlue: "#107D9A",
        wiseNestOrange: "#EE7D2D",
        wiseNestBlueGreen: "#022A35",
        wiseNestPinkBg: "#E84B9C1A",
        wiseNestBlueBg: "#2EA3931A",
        wiseNestOrangeBg: "#EE7D2D1A",
      },
      backgroundImage: {
        pinkBg: " url('/images/pinkBrush.png')",
        missionBg: " url('/images/missionBg.png')",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};
