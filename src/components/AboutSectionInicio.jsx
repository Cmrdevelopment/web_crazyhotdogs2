const AboutSectionInicio = () => {
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
  En 2011, de la mano de los Gemelos García, Rafael y Roberto, convirtieron un pequeño carrito de perritos calientes de segunda mano en el referente de los hot dogs en la isla de Gran Canaria.
</p>
<p className="text-gray-700 mb-4">
  Durante más de una década, han creado combinaciones únicas y sabrosas, usando solo ingredientes de la más alta calidad y desafiando lo convencional en cada receta.
</p>
<p className="text-gray-700 mb-6">
  En 2025, con la incorporación de Carlos Martín, nace la franquicia <strong>Crazy Hot Dogs</strong> con la misión de llevar esta experiencia memorable a toda España.
</p>

          <div className="bg-[#FFC000] px-6 py-4 rounded-xl mt-6 text-black shadow-md">
        <h4 className="text-xl mb-2 tracking-wide" style={{ fontFamily: 'Grobold, sans-serif' }}>¡UNETE A LA FAMILIA CRAZY!</h4>
        <p className="text-base font-medium">
            ¿Sueñas con tu propio negocio? 💥 Conviértete en franquiciado y lleva la locura de los hot dogs a tu ciudad.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionInicio;
