/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Noto Sans", "sans-serif"]
      },
      colors: {
        "freedom-blue": "#035eb1",
        "freedom-light-blue": "#00d8f1",
        "freedom-violet": "#8130b1",
        "freedom-yellow": "#f8e8b9",
        "freedom-white": "#fffaf7",
        "freedom-gray": "#989a9a",
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}


