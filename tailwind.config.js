/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        bg: "var(--bg)",
        panel: "var(--panel)",
        secondaryPanel: "var(--secondaryPanel)",
        textColor: "var(--textColor)",
        hoverEffect: "var(--hoverEffect)"
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
        giant: "6rem"
      },
      boxShadow: {
        allAround: "0 0 20px"
      }
    },
  },
  plugins: [],
};
