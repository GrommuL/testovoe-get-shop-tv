/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{css,scss,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        blue: '#86D3F4'
      }
    }
  },
  plugins: []
}
