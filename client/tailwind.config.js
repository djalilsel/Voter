/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
       "background-purple": "rgb(193, 190, 255)",
      }
    },
  },
  plugins: [],
}



