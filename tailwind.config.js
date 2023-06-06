/** @type {import('tailwindcss').Config} */
const colors= require("tailwindcss/colors");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/About/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm':'360px',
      'md': '540px',
      'slg':"730px",
      'lg':'860px',
      'xl':'1024px',
      '2xl': '1280px',
    },
    colors:{
      'manualgrey':'#3E497A',
      'manualyellow':'#EBB02D',
      'manuallightgrey':'#9BA4B5',
      'manualviolet':'#A459D1',
      'manualblue':'#0E214E',
      'manualblack':'#131d31',
      ...colors,
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
      },
    },
  },
  plugins: [],
}
