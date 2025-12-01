// TRONG FILE: tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gold': '#FBBF24',
        'secondary-gold': '#EAB308',
        'bg-light': '#F9FAFB',     
        'text-dark': '#1F2937',    
        'cta-red': '#DC2626',      
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}