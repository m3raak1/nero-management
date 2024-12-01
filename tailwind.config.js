/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, js, ts, jsx, tsx}'],
  
  theme: {
    backgroundImage: {
      'silver-gradient': 'linear-gradient(90deg, #D1D1D1 0%, #a6a6a6 50%, #D1D1D1 100%)',
      'red-gradient': 'linear-gradient(#8B0000 0%, #ff0000 20%, #8B0000 100%)',
    },
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

