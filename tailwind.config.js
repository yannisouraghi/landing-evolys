/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'evolys-blue': '#00B4D8',
        'evolys-blue-light': '#48CAE4',
        'evolys-blue-dark': '#0077B6',
        'evolys-blue-darker': '#023E8A',
        'evolys-accent': '#90E0EF',
        'dark': '#0A0A0A',
        'dark-light': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
