/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'navy': '#001b2e',
        'ice-blue': '#eef3f9',
        'sky-blue': '#b3cde4',
        'deep-blue': '#1d3f58',
        'steel-blue': '#537692',
        'neutral-inverse': '#6D6D6D',
      },
      fontFamily: {
        'noto': ['"Noto Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'base': '16px',
      },
      lineHeight: {
        'base': '1.6',
      },
      spacing: {
        'navbar': '70px',
        'container': '1200px',
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
      },
      transitionProperty: {
        'base': 'all',
      },
      transitionDuration: {
        'base': '300ms',
      },
      transitionTimingFunction: {
        'base': 'ease',
      },
      zIndex: {
        'navbar': '1000',
        'modal': '1050',
        'tooltip': '1060',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.08)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'flip-in': 'flipIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'slide-fade': 'slideAndFade 0.5s ease-out',
        'pop-up': 'popUp 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        'rotate-in': 'rotateIn 0.6s ease-out',
        'wave': 'wave 0.8s ease-in-out',
        'rubber-band': 'rubberBand 0.8s cubic-bezier(.25, .46, .45, .94)',
        'swing': 'swing 1s ease-in-out',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        // Add other keyframes as needed
      },
    },
  },
  plugins: [],
} 