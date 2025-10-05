module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#a855f7',
          500: '#9333ea',
          600: '#7c3aed',
          700: '#6d28d9',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fadeIn': 'fadeIn 0.8s ease-in-out',
        'typing': 'typing 1.5s steps(20) infinite alternate, blink 0.7s infinite'
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #9333ea, 0 0 10px #9333ea, 0 0 15px #9333ea' },
          '100%': { textShadow: '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#a855f7' }
        }
      }
    },
  },
  plugins: [],
}