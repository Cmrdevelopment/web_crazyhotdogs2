const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-[#FFC000] overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-black" style={{ fontFamily: 'Grobold, sans-serif' }}>
          CRAZY HOT DOGS
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-black font-medium">
          ¡Sabores que desafían la imaginación!
        </p>
        <button className="bg-black text-[#FFC000] px-8 py-3 rounded-full text-lg font-bold hover:scale-105 transition-transform">
          ¡PIDE AHORA!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;