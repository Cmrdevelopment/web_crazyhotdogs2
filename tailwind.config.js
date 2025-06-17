/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primaryrojo: "#C22634", 
        secondarynegro: "#000000",
        Mostaza: "#EAC60C",
        MostazaSuave: "#edd65f",
        footer: "#2E3E5C",
        cmrbolsa: "#328077",
        verdeClaro: "#31857E",
        gris: "#F3F4F6",
        fondosClaros: "#F2EFEC",
      },

      fontFamily: {
        grobold: ['Grobold', 'sans-serif'], // ✅ AÑADIDO AQUÍ
      },
      
      animation: {
        ketchup: 'ketchupAnim 5s ease-in-out forwards',
      },
      keyframes: {
        ketchupAnim: {
          '0%': { opacity: '0', transform: 'scale(0.5) rotate(0deg)' },
          '20%': { opacity: '0.8', transform: 'scale(1.1) rotate(10deg)' },
          '80%': { opacity: '0.8' },
          '100%': { opacity: '0', transform: 'scale(0.4) rotate(-20deg)' },
        },
      },
    },
  },

  variants: {
    extend: {
      transitionProperty: [
        "hover",
        "focus",
        "responsive",
        "motion-safe",
        "motion-reduce",
      ],
    },
  },

  plugins: [],
};
