/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black_100: "#1B1B1B",
        blueberry_blue: "#4F45E4",
        gray_600: "#4B5563",
      },
    },
  },
  plugins: [],
};
