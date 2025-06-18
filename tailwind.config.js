/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(210, 100%, 98%)',
          100: 'hsl(210, 100%, 95%)',
          200: 'hsl(210, 100%, 89%)',
          300: 'hsl(210, 100%, 80%)',
          400: 'hsl(210, 100%, 70%)',
          500: 'hsl(210, 100%, 60%)',
          600: 'hsl(210, 100%, 50%)',
          700: 'hsl(210, 100%, 40%)',
          800: 'hsl(210, 100%, 30%)',
          900: 'hsl(210, 100%, 20%)',
        },
        secondary: {
          50: 'hsl(265, 100%, 98%)',
          100: 'hsl(265, 100%, 95%)',
          200: 'hsl(265, 100%, 89%)',
          300: 'hsl(265, 100%, 80%)',
          400: 'hsl(265, 100%, 70%)',
          500: 'hsl(265, 100%, 60%)',
          600: 'hsl(265, 100%, 50%)',
          700: 'hsl(265, 100%, 40%)',
          800: 'hsl(265, 100%, 30%)',
          900: 'hsl(265, 100%, 20%)',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}