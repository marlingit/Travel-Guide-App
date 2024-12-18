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
      fontSize: {
        "clamp-4xl-6xl": ["clamp(2.25rem, 1.75rem + 2.5vw, 3.75rem)", { lineHeight: "1.2" }],
        "clamp-lg-3xl": ["clamp(1.125rem, 0.875rem + 1.25vw, 1.875rem)"]
      }
    },
  },
  plugins: [],
  darkMode: "selector",
};
