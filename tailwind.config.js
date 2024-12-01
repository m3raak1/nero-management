/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, js, ts, jsx, tsx}'],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      colors: {
        indigoNavbarBg: '#141414',
        indigoNavbarSt: '#4C4C4C',
        indigoBackground: '#0B0B0B',
        indigoHoverButton: '#4C4C4C',
        indigoButtomColor: '#202020',
        borderColor: '#4C4C4C'
      }
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}

