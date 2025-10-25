/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#2563eb',
          darkBlue: '#1e3a8a',
          lightBlue: '#60a5fa',
          accent: '#0ea5e9',
          dark: '#0f172a',
          darkGray: '#1e293b',
        }
      },
    },
    plugins: [],
  }
  