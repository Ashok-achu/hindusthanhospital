/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],



  extend: {
  keyframes: {
    slideDown: {
      '0%': { opacity: 0, transform: 'translateY(-10px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
  animation: {
    slideDown: 'slideDown 0.3s ease-out',
  },
},
extend: {
  keyframes: {
    marquee: {
      "0%": { transform: "translateX(0%)" },
      "100%": { transform: "translateX(-50%)" },
    },
    slideDown: {
      "0%": { opacity: 0, transform: "translateY(-10px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    slideInDown: {
      "0%": { opacity: 0, transform: "translateY(-100%)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  },
  animation: {
    marquee: "marquee 15s linear infinite",
    slideDown: "slideDown 0.1s ease-out",
    slideInDown: "slideInDown 0.1s ease-out",
  },
}
}
