/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'rubik': 'Rubik',
    },
    container: {
      center: true,
      padding: '20px',

      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {
      colors: {
        primary: '#3366FF'
      }
    },
  },
  plugins: [],
}

