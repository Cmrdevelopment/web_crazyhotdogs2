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
        grobold: ["Grobold", "sans-serif"],
      },

      animation: {
        ketchup: "ketchupAnim 3s ease-in-out forwards",
        fadeOut: "fadeOut 0.5s ease-in forwards",
        fadeIn: "fadeIn 0.5s ease-in forwards",
        bounceIn: "bounceIn 0.6s ease-out forwards",
        slideInLeftMobile: "slideInLeftMobile 1.2s ease-out forwards",
        slideInRightMobile: "slideInRightMobile 1.2s ease-out forwards",
        slideInLeftDesktop: "slideInLeftDesktop 0.7s ease-out forwards",
        slideInRightDesktop: "slideInRightDesktop 0.7s ease-out forwards",
      },

      keyframes: {
        ketchupAnim: {
          "0%": { opacity: "0", transform: "scale(0.5) rotate(0deg)" },
          "20%": { opacity: "0.8", transform: "scale(1.1) rotate(10deg)" },
          "80%": { opacity: "0.8" },
          "100%": { opacity: "0", transform: "scale(0.4) rotate(-20deg)" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "60%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        slideInLeftMobile: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRightMobile: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeftDesktop: {
          "0%": { transform: "translateX(-150%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRightDesktop: {
          "0%": { transform: "translateX(150%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },

  plugins: [],
};
