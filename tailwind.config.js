/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
          accent: '#06b6d4',
          dark: '#0f172a',
          darkBlue: '#1e40af',
          lightBlue: '#60a5fa',
          darkGray: '#1e293b',
          neon: '#00f5ff',
          electric: '#7c3aed',
          cosmic: '#f59e0b',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 3s ease-in-out infinite',
          'shimmer': 'shimmer 2s ease-in-out infinite',
          'rotate3d': 'rotate3d 8s ease-in-out infinite',
          'bounce-slow': 'bounce 3s infinite',
          'pulse-slow': 'pulse 4s infinite',
        }
      },
    },
    plugins: [],
  }
  