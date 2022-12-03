/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      lightRed: "hsl(356, 100%, 66%)",
      veryLightRed: "hsl(355, 100%, 74%)",
      veryDarkBlue: "hsl(208, 49%, 24%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      grayishBlue: "hsl(240, 2%, 79%)",
      veryDarkGrayishBlue: "hsl(207, 13%, 34%)",
      veryDarkBlackBlue: "hsl(240, 10%, 16%)",
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
