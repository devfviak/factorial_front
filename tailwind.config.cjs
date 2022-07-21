/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'factorial-pink': {
          DEFAULT: '#ff355e',
          dark: '#e51943'
        },
        'factorial-green': '#07a2ad',
        'factorial-gray': {
          DEFAULT: '#f4f4f5',
          dark: '#515164'
        }
      }
    }
  },
  plugins: []
};
