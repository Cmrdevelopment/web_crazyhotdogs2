import { Link } from 'react-router-dom';

const AboutSectionInicio = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Imagen + texto en fila en desktop */}
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Imagen */}
          <div className="md:w-1/2 w-full">
            <img 
              src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1749664804/Web/Foto_con_fondo_ciudad_v3_p6xfyy.png" 
              alt="Fundadores de Crazy Hot Dogs" 
              className="rounded-lg shadow-lg w-full border-8 border-[#FFC000] transition-transform duration-500 hover:scale-105 hover:saturate-150"
            />
          </div>

          {/* Texto */}
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
              En 2025, con la incorporación de Carlos Martín, nace la franquicia <strong>Crazy Hot Dogs</strong> con la misión de llevar esta experiencia única primero por toda Canarias, luego por España y, como gran sueño a 10 años, conquistar Europa con el sabor y la energía que nos define.
            </p>
             {/* Link al final, alineado a la derecha */}
            <div className="text-right">
            <Link
              to="/about"
              className="group inline-block tracking-widest"
              style={{ fontFamily: 'Grobold, sans-serif' }}
            >
              <span className="inline-block transform transition-transform duration-300 ease-out group-hover:scale-110 hover:underline text-black hover:text-[#FFC000]">
                Spoiler: <span className="text-[#FFC000] hover:text-black">lo mejor esta a un clic</span> →
              </span>
            </Link>
          </div>


          </div>
        </div>

        {/* Bloque mostaza debajo de imagen + texto */}
        <div className="bg-[#FFC000] px-6 py-6 rounded-xl mt-10 text-black shadow-md w-full text-center">
          <h4 className="text-2xl mb-3 tracking-wide" style={{ fontFamily: 'Grobold, sans-serif' }}>
            UNETE A LA FAMILIA CRAZY!
          </h4>
          <p className="text-base font-medium mb-4 max-w-3xl mx-auto">
            ¿Tienes alma emprendedora? 🚀 Lleva la locura de los hot dogs a tu ciudad con nuestra franquicia. 
            Te damos todo el apoyo que necesitas para triunfar desde el primer día.
          </p>
            <Link
            to="/franquicia"
            className="inline-block bg-black text-[#FFC000] px-6 py-3 rounded-full hover:bg-[#1a1a1a] transition-colors tracking-wide hover:text-white hover:scale-105 hover:saturate-150"
            style={{ fontFamily: 'Grobold, sans-serif' }}
            >
            FRANQUICIATE
            </Link>

        </div>


      </div>
    </div>
  );
};

export default AboutSectionInicio;
