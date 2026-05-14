/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1E3A8A',
          indigo: '#4F46E5',
        },
        accent: {
          cyan: '#22D3EE',
          purple: '#8B5CF6',
        },
        dark: {
          bg: '#0F172A',
          card: '#1E293B',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1', // Adjusted for better contrast
        }
      }
    },
  },
  plugins: [],
}
