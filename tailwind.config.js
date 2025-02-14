/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--primary-background)',
        secondary: 'var(--secondary-background)',
        tertiary: 'var(--tertiary-background)',
      },
      textColor: {
        primary: 'var(--primary-text)',
        secondary: 'var(--secondary-text)',
        tertiary: 'var(--tertiary-text)',
      },
      fontSize: {
        md: '16px',
      },
      brightness: {
        'responsive': 'var(--brightness)',
      },

    },
  },
  plugins: [],
}

