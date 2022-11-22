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
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors:{
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
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        
      }
    },
  },
  plugins: [],
};
