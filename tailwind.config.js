/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        site: "url('./assets/tucucu.jpg')",
      },
      fontSize: {
        'sm': '0.600rem',
        'base': '1rem', 
      }
    },
  },
  plugins: [],
};
