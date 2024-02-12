/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        light: colors.stone[100],
        default: colors.stone[500],
        dark: colors.stone[700],
      },
      secondary: {
        green: { light: colors.emerald[400], dark: colors.emerald[800] },
      },
      textColor: "#00000",
    },
    extend: {},
  },
  plugins: [],
};
