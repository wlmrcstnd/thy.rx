/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    // Add your file paths here
  ],
  theme: {
    extend: {},
  },
  plugins: [    require('tailwind-scrollbar'),
],
}