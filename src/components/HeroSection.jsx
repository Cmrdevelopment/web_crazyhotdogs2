import { useEffect, useState } from "react";

const HeroSection = () => {
  const [phase, setPhase] = useState("start");

  useEffect(() => {
    const middleTimer = setTimeout(() => setPhase("middle"), 700);
    const fadeTimer = setTimeout(() => setPhase("fade"), 1200);
    const finalTimer = setTimeout(() => setPhase("final"), 1800);

    return () => {
      clearTimeout(middleTimer);
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
        <p className="text-xl md:text-2xl text-black font-medium mb-4">
          ¡Sabores que desafían la imaginación!
        </p>

        {/* Animación de perritos */}
        <div className="relative h-[300px] flex justify-center items-center">
          {phase === "start" && (
            <>
              {/* Perrito derecha */}
              <img
                src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1750158606/Web/Perrito_para_Hero_normal_sin_fondo_reduced_j2pqqx.png"
                alt="Perrito derecha"
                className="w-[140px] md:w-[180px] absolute md:animate-slideInRightDesktop animate-slideInRightMobile"
              />

              {/* Perrito izquierda */}
              <img
                src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1750157667/Web/Perrito_hero_Doble_normal_sin_forndo_reduced_j504bk.png"
                alt="Perrito izquierda"
                className="w-[160px] md:w-[180px] absolute md:animate-slideInLeftDesktop animate-slideInLeftMobile"
              />
            </>
          )}

          {/* Perrito final encima */}
          {(phase === "middle" || phase === "fade" || phase === "final") && (
            <img
              src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1750156449/Web/Perrito_para_Hero_bruzhf.png"
              alt="Perrito final"
              className={`w-[300px] md:w-[390px] absolute ${
                phase === "middle" ? "animate-bounceIn" : ""
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
