/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#426d5a",
        secondary: "#eef7df",
        tertiary: "#8d2506",
        accent: "#5b8d76",
        dark: "#0e1e1b",
        light: "#fafaf5",
      },
    },
  },

  plugins: [],
};
