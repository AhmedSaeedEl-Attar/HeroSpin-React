/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'marvel': "url('./assets/marvel.png')",
      'dc': "url('./assets/DC.png')",
    }
  },
  plugins: [],
}
