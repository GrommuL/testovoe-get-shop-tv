/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{css,scss,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        blue: '#86D3F4',
        grey: '#4E4E4E'
      }
    },
    backgroundImage: {
      qr: 'url("/src/assets/images/qr.png")',
      main: 'url("/src/assets/images/bg-main.jpg")'
    },
    content: {
      check: 'url("/src/assets/images/check.svg")'
    }
  },
  plugins: []
}
