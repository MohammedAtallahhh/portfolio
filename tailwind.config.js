/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-light": "var(--background-light)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        "accent-lighter": "var(--accent-lighter)",
        "text-gradient-start": "var(--text-gradient-start)",
        "text-gradient-via": "var(--text-gradient-via)",
        "text-gradient-stop": "var(--text-gradient-stop)",
        // "purple-start": "#945BF1",
        // "purple-middle": "#BB48BF",
        // "purple-stop": "#F67E4D",
      },

      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
