/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './*.html',
  ],
  theme: {
    extend: {
      screens: {
        "ms": "320px",
        "mm": "355px",
        "ml": "425px",
        "14i": "1360px",
        "15i": "1500px"
      },
      fontFamily: {
        arc: ['Archivo', 'sans-serif'],
        // abc: ["Grey Qo", 'cursive']
      },
    },
  },
  plugins: [],
}

