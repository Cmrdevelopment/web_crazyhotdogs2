import { useEffect, useState } from "react";

const HeroSection = () => {
  const [phase, setPhase] = useState("start"); // 'start' | 'fade' | 'final'

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fade"), 1200); // justo cuando se cruzan
    const finalTimer = setTimeout(() => setPhase("final"), 1200); // aparece el resultado

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finalTimer);
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center bg-[#FFC000] overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative z-10 text-center px-4">
        <h1
          className="text-shadow text-6xl md:text-8xl font-bold mb-6 text-black"
          style={{ fontFamily: "Grobold, sans-serif" }}
        >
          CRAZY HOT DOGS
        </h1>
        <p className="text-xl md:text-2xl text-black font-medium">
          ¡Sabores que desafían la imaginación!
        </p>

        {/* Animación de perritos */}
        <div className="relative h-[300px] flex justify-center items-center">
          {phase !== "final" && (
            <>
              <img
                src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1750158606/Web/Perrito_para_Hero_normal_sin_fondo_reduced_j2pqqx.png"
                alt="Perrito derecha"
                className={`w-[140px] md:w-[180px] absolute ${
                  phase === "fade" ? "animate-fadeOut" : "animate-slideInRight"
                }`}
              />
              <img
                src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1750157667/Web/Perrito_hero_Doble_normal_sin_forndo_reduced_j504bk.png"
                alt="Perrito izquierda"
                className={`w-[160px] md:w-[200px] absolute ${
                  phase === "fade" ? "animate-fadeOut" : "animate-slideInLeft"
                }`}
              />
            </>
          )}

          {phase === "final" && (
            <img
              src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1750156449/Web/Perrito_para_Hero_bruzhf.png"
              alt="Perrito final"
              className="w-[300px] md:w-[390px] animate-fadeIn"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
