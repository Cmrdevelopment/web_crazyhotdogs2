const AboutSection = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <img 
            src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0KJP3HDEjR7oilQcqGuVyEA8Sm1pf4v95nLIB" 
            alt="Fundadores de Crazy Hot Dogs" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-black">NUESTRA HISTORIA</h2>
          <p className="text-gray-700 mb-4">
            Todo comenzó en 2015 cuando dos amigos locos por los hot dogs decidieron que el mundo necesitaba más sabor y diversión en cada bocado.
          </p>
          <p className="text-gray-700 mb-4">
            Desde entonces, hemos estado creando combinaciones únicas que desafían lo convencional, usando ingredientes de la más alta calidad.
          </p>
          <p className="text-gray-700 mb-6">
            ¡Nuestra misión es hacer que cada hot dog sea una experiencia memorable!
          </p>
          <div className="bg-[#FFC000] p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2 text-black">HORARIOS</h3>
            <p className="text-black">Lunes a Viernes: 11am - 10pm</p>
            <p className="text-black">Sábado y Domingo: 12pm - 11pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;