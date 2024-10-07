/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'mn':'460px'
      },
      textShadow: {
        'glow': '0 0 8px rgba(0, 247, 255, 0.8)', // Esto agrega el resplandor celeste
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }), // Configuración para tailwind-scrollbar,
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-glow': {
          'text-shadow': '0 0 8px rgba(0, 247, 255, 0.8)',
        },
      })
    },
  ],
  variants: {
    scrollbar: ['rounded'], // Para aplicar estilos redondeados en la scrollbar
  },
}