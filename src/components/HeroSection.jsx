const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-[#FFC000] overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-shadow text-6xl md:text-8xl font-bold mb-6 text-black" style={{ fontFamily: 'Grobold, sans-serif' }}>
          CRAZY HOT DOGS
        </h1>
        <p className="text-xl md:text-2xl text-black font-medium">
          ¡Sabores que desafían la imaginación!
        </p>
        <a
  href="/menu"
  className="relative inline-block w-48 md:w-56 hover:scale-105 transition-transform duration-300 group"
>
  {/* Imagen normal */}
  <img
    src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1750025931/Web/Perrito_boton_sin_fondo_giro_wtzbts.png"
    alt="¡Ver menú!"
    className="w-full absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
  />

  {/* Imagen hover */}
  <img
    src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1750026462/Web/Perrito_boton_mordida_sin_fondo_reduced_n4n8gz.png"
    alt="¡Ver menú!"
    className="w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
  />

  {/* Texto MENU al hacer hover */}
  <span
    className="relative bottom-14 tracking-wider hover:text-white"
    style={{ fontFamily: 'Grobold, sans-serif' }}
  >
    Ver MENU
  </span>
</a>



      </div>
    </div>
  );
};

export default HeroSection;