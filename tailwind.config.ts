import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        japanese: ['"Noto Sans JP"', 'Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        cream: '#FAF9F6',
        'text-primary': '#1A1A1A',
        'text-secondary': 'rgba(26, 26, 26, 0.85)',
        'text-muted': 'rgba(26, 26, 26, 0.7)',
        'text-light': 'rgba(26, 26, 26, 0.65)',
        'text-dim': 'rgba(26, 26, 26, 0.55)',
        'text-faint': 'rgba(26, 26, 26, 0.5)',
        'border-subtle': 'rgba(26, 26, 26, 0.12)',
        'border-light': 'rgba(26, 26, 26, 0.25)',
        'accent': '#c4956a',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      letterSpacing: {
        'wide': '0.03em',
        'wider': '0.4em',
        'widest': '0.5em',
        'tracking-tight': '0.02em',
        'tracking-loose': '0.01em',
        'tracking-wider': '0.4em',
        'tracking-widest': '0.5em',
        'tracking-loosest': '0.005em',
      },
    },
  },
} as Config;