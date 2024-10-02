/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern' : "url('./src/assets/head1.jpg')",
      },
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralGray': '#4D4D4D',
        'brandPrimary': '#26684B',
        'brandSecondary': '#F24E2B',
        'neutralGrey': '#717171',
        'lightGreen' : '#effaf3'
      }
    },
  },
  plugins: [],
}
