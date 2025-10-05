module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/preline/preline.js',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      cairo: ["Cairo", "sans-serif"],
      sans: ['Cairo', 'Inter', 'system-ui', 'sans-serif'],
    },
      
    colors: {
      primary: {
        50: '#f0f9f4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#4CAF50',
        600: '#418944',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      accent: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      primary_hover: '#418944',
      Second: '#f6fcf9',
    },
    extend: {
      animation: {
        'slow-bounce': 'slow-bounce 2s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'particle-float': 'particleFloat 20s infinite linear',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
        'stagger-fade-in': 'staggerFadeIn 0.6s ease forwards',
        'zoom-in': 'zoomIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'rotate-in': 'rotateIn 0.6s ease-out',
      },
      keyframes: {
        'slow-bounce': {
          '0%, 100%': {
            transform: 'translateY(-15%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(76, 175, 80, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(76, 175, 80, 0.6)',
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        morph: {
          '0%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
        },
        particleFloat: {
          '0%': {
            transform: 'translateY(100vh) translateX(0px) rotate(0deg)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100px) translateX(100px) rotate(360deg)',
            opacity: '0',
          },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#4CAF50' },
        },
        staggerFadeIn: {
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        zoomIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(100px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        rotateIn: {
          from: {
            opacity: '0',
            transform: 'rotate(-200deg) scale(0)',
          },
          to: {
            opacity: '1',
            transform: 'rotate(0deg) scale(1)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'elegant': '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.2)',
        'elegant-hover': '0 20px 40px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 20px rgba(76, 175, 80, 0.3)',
        'glow-lg': '0 0 30px rgba(76, 175, 80, 0.4)',
      },
    }
  },
  plugins: [ require('flowbite/plugin'),  require('preline/plugin') ],

};
