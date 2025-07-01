/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
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
      },
      safelist: [
        'perspective-1000',
        'preserve-3d',
        'backface-hidden',
        'rotate-y-180',

        // hobbies text
        'text-purple-500',
        'text-green-500',
        'text-orange-500',
        'text-blue-500',
        'text-white-500',

        // tech bg color
        'bg-purple-500',
        'bg-orange-500',
        'bg-yellow-500',
        'bg-indigo-500',
        'bg-blue-500',
        'bg-teal-500',
        'bg-green-500',

        'gray-400'
      ]
    },
  },
  plugins: [],
} 