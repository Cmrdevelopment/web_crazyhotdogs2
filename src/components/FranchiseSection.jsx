const FranchiseSection = () => {
  const benefits = [
    {
      title: "Modelo Probado",
      description: "Sistema operativo y recetas estandarizadas para garantizar el éxito",
      icon: "📊"
    },
    {
      title: "Entrenamiento Completo",
      description: "Capacitación inicial y continua para ti y tu equipo",
      icon: "🎓"
    },
    {
      title: "Marketing Potente",
      description: "Campañas nacionales y estrategias locales para atraer clientes",
      icon: "📢"
    },
    {
      title: "Soporte Continuo",
      description: "Asesoría permanente en operaciones, calidad y crecimiento",
      icon: "🛠️"
    },
    {
      title: "Ingresos Múltiples",
      description: "Ventas en local, delivery, catering y eventos especiales",
      icon: "💰"
    },
    {
      title: "Comunidad Activa",
      description: "Red de franquiciados para compartir mejores prácticas",
      icon: "🤝"
    }
  ];

  const steps = [
    { number: "1", text: "Solicitud inicial y entrevista" },
    { number: "2", text: "Presentación detallada del modelo" },
    { number: "3", text: "Análisis de ubicación y mercado" },
    { number: "4", text: "Firma de contrato" },
    { number: "5", text: "Entrenamiento y apertura" }
  ];

  return (
    <div className="py-16 px-4 bg-[#FFC000]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">
          ÚNETE A <span className="underline">CRAZYHOTDOGS</span>
        </h2>
        <p className="text-xl text-center mb-12 text-black max-w-3xl mx-auto">
          Convierte tu pasión por la comida en un negocio rentable con nuestro modelo de franquicia probado
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-black">¿POR QUÉ CRAZY HOT DOGS?</h3>
            <p className="text-lg mb-6 text-black">
              En los últimos 3 años hemos crecido un 300% gracias a nuestro concepto único de hot dogs gourmet con sabores innovadores.
            </p>
            <p className="text-lg mb-8 text-black">
              Ofrecemos una oportunidad de negocio en el sector de comida rápida premium, con márgenes atractivos y operación simplificada.
            </p>
            <div className="bg-black p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-[#FFC000]">INVERSIÓN INICIAL</h4>
              <p className="text-white mb-2">Desde: € 59.900</p>
              <p className="text-white">ROI estimado: 12-24 meses</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-black">SOLICITA INFORMACIÓN</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Teléfono" 
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Ciudad de interés" 
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Cuéntanos sobre tu experiencia e interés" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-black text-[#FFC000] py-3 rounded font-bold hover:bg-gray-900 transition-colors"
              >
                QUIERO SER FRANQUICIADO
              </button>
            </form>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-black">BENEFICIOS DE NUESTRA FRANQUICIA</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-black">{benefit.title}</h4>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-black">NUESTRO PROCESO</h3>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-black transform -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0">
                        <h4 className="text-2xl font-bold text-black">{step.text}</h4>
                      </div>
                      <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-start">
                        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold">
                          {step.number}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:w-1/2 md:pr-12 flex justify-center md:justify-end">
                        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold">
                          {step.number}
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                        <h4 className="text-2xl font-bold text-black">{step.text}</h4>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-8 rounded-xl">
          <h3 className="text-3xl font-bold mb-6 text-[#FFC000]">PREGUNTAS FRECUENTES</h3>
          <div className="space-y-4">
            <div className="border-b border-gray-700 pb-4">
              <h4 className="text-xl font-bold mb-2 text-[#FFC000]">¿Cuál es el perfil ideal para un franquiciado?</h4>
              <p className="text-white">Buscamos emprendedores apasionados por la comida y el servicio al cliente, con capacidad de liderazgo y gestión. No se requiere experiencia previa en restaurantes.</p>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <h4 className="text-xl font-bold mb-2 text-[#FFC000]">¿Qué incluye la inversión inicial?</h4>
              <p className="text-white">Derechos de franquicia, equipamiento completo, inventario inicial, capacitación, diseño y apoyo en la apertura, y paquete de marketing inicial.</p>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <h4 className="text-xl font-bold mb-2 text-[#FFC000]">¿Qué tipo de ubicaciones son ideales?</h4>
              <p className="text-white">Plazas comerciales, zonas de alto tráfico peatonal, cerca de oficinas o universidades, con espacio entre 40-80 m2.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-[#FFC000]">¿Qué apoyo recibo después de la apertura?</h4>
              <p className="text-white">Visitas periódicas de supervisión, actualización de menú, campañas de marketing nacionales, plataforma de e-learning, y soporte 24/7 para emergencias operativas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseSection;

// DONE