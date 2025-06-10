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
