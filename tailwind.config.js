/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070d',
        carbon: '#0b1020',
        graphite: '#151a2d',
        electric: '#35a7ff',
        pulse: '#9a7cff',
        frost: '#edf5ff',
        mint: '#43e8b5',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      opacity: {
        8: '0.08',
        12: '0.12',
        14: '0.14',
        15: '0.15',
        16: '0.16',
        18: '0.18',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(53, 167, 255, 0.24)',
        violet: '0 22px 70px rgba(154, 124, 255, 0.22)',
      },
      backgroundImage: {
        'hero-radial':
          'linear-gradient(120deg, rgba(53, 167, 255, 0.16), transparent 34%), linear-gradient(240deg, rgba(154, 124, 255, 0.14), transparent 38%), linear-gradient(135deg, #05070d 0%, #090d19 45%, #101626 100%)',
        'glass-line':
          'linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04))',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(18px, -16px, 0) scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        aurora: 'aurora 12s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
};
