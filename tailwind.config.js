/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#4a90e2',
        'primary-dark': '#3a7bd5',
      },
      fontFamily: {
        'arabic': ['Tajawal', 'Arial', 'sans-serif'],
        'english': ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
}