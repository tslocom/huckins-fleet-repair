/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ffb68b",
        "primary-container": "#f27405",
        "on-primary": "#522300",
        "on-primary-container": "#522300",
        "background": "#131313",
        "surface": "#131313",
        "surface-variant": "#353534",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-low": "#1c1b1b",
        "surface-container-lowest": "#0e0e0e",
        "on-background": "#e5e2e1",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#dfc0b0",
        "outline": "#a78b7c",
        "outline-variant": "#584236",
        "secondary": "#c7c6c6",
        "error": "#ffb4ab",
      },
      borderRadius: {
        "DEFAULT": "8px",
        "lg": "8px",
        "xl": "12px",
      },
      spacing: {
        "margin-mobile": "16px",
        "margin-desktop": "32px",
        "container-max": "1200px",
        "stack-sm": "8px",
        "stack-md": "16px",
        "stack-lg": "32px",
        "gutter": "16px",
      },
      maxWidth: {
        "container-max": "1200px",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
