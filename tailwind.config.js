/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          950: '#000a1f', 
          900: '#000d33', 
          800: '#001a4d', 
          700: '#002559', 
        },
        yellow: {
          300: '#fbbf24', 
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

