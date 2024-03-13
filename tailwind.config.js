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
                '0%': { transform: 'translateY(150%)', opacity: 0},
                '100%': { transform: 'translateY(0)', opacity: 1},
            },
        },
        backgroundImage: {
            'ff-7': "url('/src/assets/background/ff7_background.jpg')",
        }
    },
  },
  plugins: [],
}

