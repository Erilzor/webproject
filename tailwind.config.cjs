/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      fontSize:{
        xxs: '0.5rem',
      },
      backgroundImage:{
        'hero-pattern': "url('/img/space.jpg')",
        'homepage': "url('/img/homepage.jpg')",
      },
      colors:{
        'backgroundcolor': 'gradient-to-r from-sky-500 to-indigo-500',
        'white': '#ffffff',
        'black': '#000000',
        'border-color': '#4b5563',
        'newtoncolor': '#eb6921'
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        spinslow:{
          from: 
          { transform: 'rotate(0deg)'},
          to: 
          { transform: 'rotate(360deg)'}
        } 
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
         wiggle: 'wiggle 10s ease-in-out infinite',
         spinslow: 'spin 20s linear infinite',
         spinslower: 'spin 200s linear infinite',
         bounceslow: 'bounce 80s infinite'
      }
    },
  },
  plugins: [],
};
