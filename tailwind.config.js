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
        "blue-start": "#00BAFF",
        "blue-stop": "#063EF9",
        "blue-start-dark": "#b4ebff",
        "blue-stop-dark": "#5b81ff",
        "purple-start": "#945BF1",
        "purple-middle": "#BB48BF",
        "purple-stop": "#F67E4D",
        "off-black": "#151c26",
        "off-white": "#F1F1F1",
      },

      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
