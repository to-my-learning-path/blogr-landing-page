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
      veryLightRed: "hsl(13, 100%, 72%)",
      lightRed: "hsl(353, 100%, 62%)",
      veryDarkGrayBlue: "hsl(237, 17%, 21%)",
      veryDarkDesaturatedBlue: "hsl(237, 23%, 32%)",
      transparent: "transparent",
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        // "intro-bg": `linear-gradient(${theme.veryLightRed}, ${theme.lightRed})`,
        // "body-bg": `linear-gradient(${theme.veryDarkGrayBlue}, ${theme.veryDarkDesaturatedBlue})`,
        "intro-bg":
          "linear-gradient(hsl(13, 100%, 72%), hsl(353, 100%, 62%)), url('./images/bg-pattern-intro-mobile.svg')",
        "body-bg":
          "linear-gradient(hsl(237, 17%, 21%), hsl(237, 23%, 32%)), url('./images/bg-pattern-circles.svg')",
      },
    },
  },
  plugins: [],
};
