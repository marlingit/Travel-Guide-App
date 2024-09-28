/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary))",
        text: "rgba(var(--color-text))",
        "text-light": "rgba(var(--color-text-light))",
        background: "var(--color-background)",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
