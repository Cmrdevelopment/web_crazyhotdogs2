// const AboutSection = () => {
//   return (
//     <div className="py-16 px-4 bg-white">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
//         <div className="md:w-1/2 w-full">
//           <img 
//             src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1749664804/Web/Foto_con_fondo_ciudad_v3_p6xfyy.png" 
//             alt="Fundadores de Crazy Hot Dogs" 
//             className="rounded-lg shadow-lg w-11/12 mx-auto border-8 border-[#FFC000] transition-transform duration-500 hover:scale-105 hover:saturate-150"
//           />
//         </div>
//         <div className="md:w-1/2 w-full">
//           <h2 className="text-4xl mb-6 text-black tracking-wide" style={{ fontFamily: 'Grobold, sans-serif' }}>
//             Nuestra HISTORIA
//           </h2>
//           <p className="text-gray-700 mb-4">
//             Todo comenzo en 2015 cuando dos amigos locos por los hot dogs decidieron que el mundo necesitaba mas sabor y diversion en cada bocado.
//           </p>
//           <p className="text-gray-700 mb-4">
//             Desde entonces, hemos estado creando combinaciones unicas que desafian lo convencional, usando ingredientes de la mas alta calidad.
//           </p>
//           <p className="text-gray-700 mb-6">
//             ¡Nuestra mision es hacer que cada hot dog sea una experiencia memorable!
//           </p>
//           <div className="bg-[#FFC000] p-4 rounded-lg">
//             <h3 className="font-bold text-xl mb-2 text-black">HORARIOS</h3>
//             <p className="text-black">Lunes a Viernes: 11am - 10pm</p>
//             <p className="text-black">Sabado y Domingo: 12pm - 11pm</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;


const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#FFC000] to-yellow-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-hotdogs opacity-10 animate-pulse-slow"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-6xl font-extrabold text-white text-center mb-16 drop-shadow-lg animate-fade-in-down tracking-wide" style={{ fontFamily: 'Grobold, sans-serif' }}>
          La Historia de Crazy Hot Dogs
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group transform transition-transform duration-500 hover:scale-105 hover:rotate-2">
            <img
              src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1749664804/Web/Foto_con_fondo_ciudad_v3_p6xfyy.png"
              alt="Orígenes de Crazy Hot Dogs"
              className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white transform transition-all duration-500 group-hover:shadow-3xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-3xl font-bold text-center p-4">¡Donde todo comenzó!</p>
            </div>
          </div>
          <div className="text-white text-xl leading-relaxed bg-black bg-opacity-40 p-8 rounded-2xl shadow-xl backdrop-blur-sm animate-fade-in-right">
            <p className="mb-6">
              Los Gemelos García, Rafael y Roberto, son dos hermanos canarios con espíritu emprendedor que en 2011 decidieron fundar Crazy Hot Dogs, una marca de comida rápida especializada en perritos calientes. Con formación en ciencias empresariales y relaciones laborales, y tras trabajar en distintos sectores, ambos se unieron para emprender un negocio sencillo y con baja inversión inicial. La idea surgió al ver un puesto de hot dogs en un centro comercial y, tras adquirir un carrito de segunda mano, comenzaron su andadura en el Centro Comercial La Ballena.
            </p>
            <p className="mb-6">
              Los comienzos fueron duros, con ingresos bajos y mucha incertidumbre, pero una promoción improvisada de "liquidación" con perritos a 1 euro disparó las ventas y marcó un antes y un después. Apostaron por una estrategia de precios bajos y ventas masivas, lo que les permitió consolidarse y crecer. Con el tiempo, abrieron más establecimientos en distintos centros comerciales, aunque no todos los proyectos fueron exitosos. Algunos locales mal ubicados o decisiones precipitadas les enseñaron valiosas lecciones empresariales.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse mb-20">
          <div className="relative group transform transition-transform duration-500 hover:scale-105 hover:-rotate-2">
            <img
              src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1749664804/Web/Foto_con_fondo_ciudad_v3_p6xfyy.png"
              alt="Crecimiento de Crazy Hot Dogs"
              className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white transform transition-all duration-500 group-hover:shadow-3xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-3xl font-bold text-center p-4">¡De carrito a leyenda!</p>
            </div>
          </div>
          <div className="text-white text-xl leading-relaxed bg-black bg-opacity-40 p-8 rounded-2xl shadow-xl backdrop-blur-sm animate-fade-in-left">
            <p className="mb-6">
              A partir de 2022, Crazy Hot Dogs experimentó una importante transformación. Mejoraron la estética de sus locales, optimizaron procesos, afinaron la selección de personal y redefinieron su enfoque de negocio en vistas a su posible futura franquiciación. Redujeron errores del pasado y aumentaron la rentabilidad de sus puntos de venta. Además, comenzaron a explorar nuevos modelos como los puntos de venta "express" en colaboración con supermercados Spar, que les permitieron obtener beneficios sin asumir grandes costes.
            </p>
            <p className="mb-6">
              En 2023, con la incorporación del empresario Carlos Martín, los Gemelos García se enfocan en convertir Crazy Hot Dogs en una franquicia. Su visión no es sólo expandir la marca, sino crear un sistema de trabajo integral que permita un funcionamiento eficiente y estandarizado. Aspiran a convertirse en el referente nacional e internacional de los hot dogs, aplicando tecnología, automatización y una filosofía clara: ofrecer un producto de calidad, a buen precio, para toda la familia. Invitan a otros a sumarse a este proyecto para crecer juntos.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-white text-3xl font-bold mb-8 animate-pulse tracking-widest" style={{ fontFamily: 'Grobold, sans-serif' }}>
            ¡Unete a la leyenda de Crazy Hot Dogs!
          </p>
          <a
          href="/franquicia"
          className="inline-block px-10 py-4 bg-white text-[#FFC000] text-2xl font-bold rounded-full shadow-2xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 hover:rotate-3 animate-bounce-slow"
        >
          ¡Descubre el Sabor!
        </a>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

