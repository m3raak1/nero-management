/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, js, ts, jsx, tsx}'],
  
  theme: {
    backgroundImage: {
      'silver-gradient': 'linear-gradient(90deg, #D1D1D1 0%, #a6a6a6 50%, #D1D1D1 100%)',
      'red-gradient': 'linear-gradient(#8B0000 0%, #ff0000 20%, #8B0000 100%)',
      'light-red-gradient': 'linear-gradient(#ff9999 0%, #ff4444 20%, #ff9999 100%)',
      'ruby-gradient': 'linear-gradient(90deg, rgba(255,0,0,1) -20%, rgba(125,0,0,1) 50%, rgba(255,0,0,1) 120%);',
      'sapphire-gradient': 'linear-gradient(90deg, rgba(75,93,255,1) -30%, rgba(54,0,181,1) 50%, rgba(75,93,255,1) 130%);',
      'emerald-gradient': 'linear-gradient(90deg, rgba(0,255,38,1) -40%, rgba(0,91,11,1) 50%, rgba(0,255,38,1) 140%);',
      'metal-gradient': 'linear-gradient(90deg, rgba(113,113,113,1) -20%, rgba(46,46,46,1) 50%, rgba(113,113,113,1) 120%);',
      'gold-gradient': 'linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);'
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

