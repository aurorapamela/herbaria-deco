/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#397359",
        secondary: "#e3eadc",
        tertiary: "#8d2506",
        accent: "#f5c6c3",
        dark: "#0e1e1b",
        light: "#fafaf5",
      },
    },
  },

  plugins: [],
};
