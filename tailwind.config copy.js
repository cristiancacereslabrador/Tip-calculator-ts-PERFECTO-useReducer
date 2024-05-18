/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      userSelect: {
        none: "none",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".user-select-none": {
          userSelect: "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
