/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          'park-green': '#7BAE7F',
          'earth-brown': '#5A4632',
          'sunbeam-beige': '#F5EEDC'
        },
      },
    },
    plugins: [],
  }
  