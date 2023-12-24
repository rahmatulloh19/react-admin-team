/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainTextColor: "#252733",
        secondaryTextColor: "#9fa2b4",
        borderColor: "#dfe0eb",
      },
    },
  },
  plugins: [],
};
