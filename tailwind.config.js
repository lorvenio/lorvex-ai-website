/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1F3A",
        primary: "#2F80ED",
        secondary: "#C0C6D4",
        surface: "#0F2A4A",
        glow: "#56A3FF"
      },
      fontFamily: {
        inter: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        space: ["var(--font-space)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(47, 128, 237, 0.35)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
