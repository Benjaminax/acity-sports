/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable dark mode using the 'class' strategy
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          bebas: ['Bebas Neue', 'sans-serif'],
        },
        colors: {
          'united-red': '#DA291C', // Manchester United's red shade
        },
      },
    },
    plugins: [],
  }