/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/shared-ui/src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'volkhov': 'var(--font-volkhov)',
      'poppins': 'var(--font-poppins)'
    },
    fontSize: {
      'h1': ['64px', {
        fontWeight: 700,
        lineHeight: '70px',
      }],
      'h2': ['48px', {
        fontWeight: 700,
        lineHeight: '54px'
      }],
      'h3': ['24px', {
        fontWeight: 500,
        lineHeight: '26px'
      }],
      'p1': ['20px', {
        fontWeight: 400,
        lineHeight: '40px'
      }],
    },
    extend: {    
      colors: {
        primary: 'rgb(34, 34, 34)',
        secondary: 'rgb(113, 113, 113)',
        'orange-500': '#FA7436'
      },
      backgroundColor: {
        primary: '#FEFCFB',
        secondary: '#F7F8FC',
      },
      maxWidth: {
        'content': '1280px'
      }
    },
  },
  plugins: [],
};
