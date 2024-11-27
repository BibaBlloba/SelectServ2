/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('assets/blue_bg.png')",
      },
      screens: {
        sm: "480px",
      },
      fontFamily: {
        mainFont: ['"Nunito"', "sans-serif"],
      },
    },
    plugins: [],
  },
};
