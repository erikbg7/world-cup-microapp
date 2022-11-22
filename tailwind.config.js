/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '390px',
      },
      backgroundColor: {
        qatar: '#8A1638',
        cream: '#EEEEE3',
        teal: '#02CFB6',
        liveIndicator: '#00FF00',
      },
      textColor: {
        qatar: '#8A1638',
      },
      borderColor: {
        qatar: '#8A1638',
        teal: '#02cfb6',
        red: '#FD2A4B',
      },
    },
  },
  plugins: [],
};
