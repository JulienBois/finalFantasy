/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
        fontFamily: {
            'pixelify': ['pixelify', 'sans'],
            'finalf': ['finalf', 'finalfantasy'],
            'miriadpro': ['miriadpro', 'sans-serif'],
        },
        animation: {
            'slide-up': 'slide-up 1.2s ease-out',
        },
        keyframes: {
            'slide-up': {
                '0%': { transform: 'translateY(400%)', opacity: 0},
                '100%': { transform: 'translateY(0)', opacity: 1},
            },
        },
    },
  },
  plugins: [],
}

