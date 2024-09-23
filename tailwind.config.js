/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00BD95",
        secondary: "#21997f",
        bg: "#303135",
        panel: "#20272F",
        secondaryPanel: "#171C22",
        textColor: "#ffffff"
      },
      fontFamily: {
        fontFamily: "Roboto, sans-serif"
      },
      fontSize: {
        small: "1.6rem",
        base: "2rem",
        medium: "2.4rem",
        large: "3rem",
        extraLarge: "4.5rem",
      }
    },
  },
  plugins: [],
};
