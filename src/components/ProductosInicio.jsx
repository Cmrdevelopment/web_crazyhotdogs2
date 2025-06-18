import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const productos = [
    // 💢✅ PRODUCTOS 
  { nombre: 'Productos', imagen: 'https://res.cloudinary.com/dhfkoxnrq/image/upload/v1708693644/Logos%20Cracy/logo_mostaza_reduced_qfpwhv.png' },
  { nombre: 'Perrito Premium', imagen: 'https://res.cloudinary.com/dssm2bf0j/image/upload/v1749915200/Web/Productos/Perrito_Premium_sin_fondo_reduced_cr9o1g.png' },
  { nombre: 'Perrito Especial Doble', imagen: 'https://res.cloudinary.com/dssm2bf0j/image/upload/v1749840600/Web/Productos/3_-_perrito_especial_doble_-_3.90_dxww8c.png' },
  { nombre: 'Nachos Cheddar', imagen: 'https://res.cloudinary.com/dssm2bf0j/image/upload/v1749840404/Web/Productos/6_-_nachos_cheddar_peque%C3%B1os_wznt9v.png' },

  // 💢✅ MENUS 
  { nombre: 'Menús', imagen: 'https://res.cloudinary.com/dhfkoxnrq/image/upload/v1708693644/Logos%20Cracy/logo_mostaza_reduced_qfpwhv.png' },
  { nombre: 'Menú Crazy', imagen: 'https://res.cloudinary.com/dssm2bf0j/image/upload/v1749929746/Web/Productos/Menu_Crazy_explosivo_reduced_sin_fond_klnbcf.png' },
  { nombre: 'Menú Big Crazy', imagen: 'https://res.cloudinary.com/dssm2bf0j/image/upload/v1749914736/Web/Productos/Menu_Big_Crazy_explosivo_sin_fondo_r8dr93.png' },
  // 💢✅ POSTRES y CAFES
  { nombre: 'Desayunos, postres y café', imagen: 'https://res.cloudinary.com/dhfkoxnrq/image/upload/v1708693644/Logos%20Cracy/logo_mostaza_reduced_qfpwhv.png' },
  { nombre: 'Postres', imagen: 'https://res.cloudinary.com/dssm2bf0j/image/upload/v1749913935/Web/Productos/Postres_jd2xl3.png' },
  { nombre: 'Desayunos y Cafés', imagen: 'https://res.cloudinary.com/dssm2bf0j/image/upload/v1749914092/Web/Productos/Portada_desayunos_y_cafe_exihdn.png' },
  // 💢✅ BEBIDAS 
  { nombre: 'Bebidas', imagen: 'https://res.cloudinary.com/dhfkoxnrq/image/upload/v1708693644/Logos%20Cracy/logo_mostaza_reduced_qfpwhv.png' },
  { nombre: 'Bebidas Frias', imagen: 'https://res.cloudinary.com/dssm2bf0j/image/upload/v1749913987/Web/Productos/PORTADA_BEBIDAS_FRIAS_omghkg.png' },
  { nombre: 'Bebidas Calientes', imagen: 'https://res.cloudinary.com/dssm2bf0j/image/upload/v1749914452/Web/Productos/Caf%C3%A9_taza_bestial_sin_fondo_zon9t9.png' },
];

const ProductosInicio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <section className="relative bg-white py-16 px-6 md:px-20 text-left overflow-hidden">
{/* Ola móvil (versión más sutil) */}
<svg
  className="block md:hidden absolute inset-0 w-full h-full z-0"
  viewBox="0 0 1440 320"
  preserveAspectRatio="none"
>
  <path
    fill="#FFE07D"
    d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
  />
</svg>

{/* Ola escritorio (versión diagonal más agresiva) */}
<svg
  className="hidden md:block absolute inset-0 w-full h-full z-0"
  viewBox="0 0 1440 320"
  preserveAspectRatio="none"
  style={{ transform: 'rotate(-2deg) scale(1.2)', transformOrigin: 'bottom left' }}
>
  <path
    fill="#FFE07D"
    d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,181.3C672,171,768,149,864,160C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
  />
</svg>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Texto e imagen superior */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-1">
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight tracking-widest text-center md:text-left" style={{ fontFamily: 'Grobold, sans-serif' }}>
              Descubre nuestros <br />
              <span className="block mt-4 text-[#FFC000] drop-shadow-[5px_4px_3px_rgba(0,0,0,3)] ">sabores CRAZY</span>
            </h2>
            <p className="md:text-left text-center text-xl md:text-2xl mb-0 text-black font-medium">
              Disfruta de opciones deliciosas, desde nuestra carta de perritos hasta nuestros complementos más sabrosos.
            </p>
            <div className="flex justify-center md:justify-start mb-5 md:mb-0">
            <a
                href="/menu"
                className="relative inline-block w-48 md:w-56 hover:scale-105 transition-transform duration-300 group"
            >
                {/* Imagen normal */}
                <img
                src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1750158606/Web/Perrito_para_Hero_normal_sin_fondo_reduced_j2pqqx.png"
                alt="¡Ver menú!"
                className="mt-8 ml-5 md:mt-8 md:ml-5 w-44 md:w-32 absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />

                {/* Imagen hover */}
                <img
                src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1750156449/Web/Perrito_para_Hero_bruzhf.png "
                alt="¡Ver menú!"
                className="w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
                <span
                className="absolute left-1/2 transform -translate-x-1/2 top-full mt-[-50px] text-black text-sm md:text-base tracking-widest opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                style={{ fontFamily: 'Grobold, sans-serif' }}
              >
                Ver MENU
              </span>

            </a>
            </div>


          </div>
          <div className="md:w-1/3 flex justify-center mt-1 md:mt-0 mb-5 md:mb-0">
            <img
              src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1749858357/Web/Productos/Men%C3%BA_Duoo_para_web_tdu1lt.png"
              alt="Crazy menú"
              className="w-[250px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Carrusel */}
        <div className="relative">
          <button 
          onClick={scrollPrev} 
          aria-label="Anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-Mostaza text-black p-3 rounded-full shadow hover:bg-Mostaza z-10">          
            <FaChevronLeft size={20} />
          </button>

          <div className="overflow-hidden px-12 py-10 min-h-[320px]" ref={emblaRef}>
            <div className="flex">
              {productos.map((prod, i) => (
                <div key={i} className="flex-[0_0_33.3333%] px-4">
                  <div className={`transition-transform duration-300 ease-in-out rounded-3xl p-6 flex flex-col items-center justify-center bg-white shadow-xl min-w-[260px] min-h-[340px] sm:min-w-[220px] sm:min-h-[300px] ${selectedIndex === i ? 'scale-110 z-10' : 'scale-95 opacity-80'}`}>
                    <img src={prod.imagen} alt={prod.nombre} className="w-48 h-48 object-contain mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-wider">{prod.nombre}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
          onClick={scrollNext}
          aria-label="Siguiente" 
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full shadow hover:bg-yellow-300 z-10">
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-Mostaza scale-125' : 'bg-gray-300'}`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductosInicio;
