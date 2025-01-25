/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#d1d5db',
        dark_gray: '#4b5563',
        red_progress: '#dc2626',
        blue_progress: '#2563eb',
        green_progress: '#16a34a',
        yellow_progress: '#ca8a04',
        text_color: '#222222',
        bg_color: '#f9f9f9',
        bg_secondary: '#ffffff',
        border_color: '#e2e8f0',
      }
    },
  },
  plugins: [],
}