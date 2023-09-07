/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lora:['Lora','sans'],
        Poppins:['Poppins', 'sans-serif'],
        DancingScripts:['Dancing Script'],
      },
      screens:{
        vvsm:"150px",
        vsm:"320px",
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1280px"
      },
      animation: {
        "spin-slow": 'spin 20s linear infinite', // Adjust the duration (4s) as needed for a slower rotation
      },
    },
  },
  plugins: [],
}

