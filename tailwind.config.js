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
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }), // Configuración para tailwind-scrollbar
  ],
  variants: {
    scrollbar: ['rounded'], // Para aplicar estilos redondeados en la scrollbar
  },
}