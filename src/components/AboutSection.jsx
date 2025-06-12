const AboutSection = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 w-full">
          <img 
            src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1749664804/Web/Foto_con_fondo_ciudad_v3_p6xfyy.png" 
            alt="Fundadores de Crazy Hot Dogs" 
            className="rounded-lg shadow-lg w-11/12 mx-auto border-8 border-[#FFC000] transition-transform duration-500 hover:scale-105 hover:saturate-150"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl mb-6 text-black tracking-wide" style={{ fontFamily: 'Grobold, sans-serif' }}>
            Nuestra HISTORIA
          </h2>
          <p className="text-gray-700 mb-4">
            Todo comenzo en 2015 cuando dos amigos locos por los hot dogs decidieron que el mundo necesitaba mas sabor y diversion en cada bocado.
          </p>
          <p className="text-gray-700 mb-4">
            Desde entonces, hemos estado creando combinaciones unicas que desafian lo convencional, usando ingredientes de la mas alta calidad.
          </p>
          <p className="text-gray-700 mb-6">
            ¡Nuestra mision es hacer que cada hot dog sea una experiencia memorable!
          </p>
          <div className="bg-[#FFC000] p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2 text-black">HORARIOS</h3>
            <p className="text-black">Lunes a Viernes: 11am - 10pm</p>
            <p className="text-black">Sabado y Domingo: 12pm - 11pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
