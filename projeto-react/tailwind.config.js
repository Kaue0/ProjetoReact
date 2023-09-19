/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        cardshadow: "0px 4px 21px -4px rgba(0, 0, 0, 0.40)",
      },
    },
  },
  plugins: [],
}

