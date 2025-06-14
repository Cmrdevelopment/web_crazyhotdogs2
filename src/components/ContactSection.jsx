const ContactSection = () => {
  return (
    <div className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12 text-[#FFC000] tracking-wide"style={{ fontFamily: 'Grobold, sans-serif' }}>Con - tacto</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
          <h3 className="text-2xl font-bold mb-4 text-[#FFC000]">ENCUÉNTRANOS</h3>

          <div className="h-64 bg-gray-800 rounded-xl mb-6 overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img 
              src="https://res.cloudinary.com/dssm2bf0j/image/upload/v1749817478/Web/Crazy_La_Ballena_yrzbw6.jpg" 
              alt="Crazy Hot Dogs La Ballena"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mb-4 font-medium text-2xl">Central Crazy HOT DOG´S</p>
          <p className="mb-0">Centro Comercial La Ballena</p>
          <p className="mb-4">Carretera del Centro, 112, 35013 Las Palmas de Gran Canaria</p>
          <p className="text-xl font-bold text-[#FFC000]">828 90 74 95</p>
        </div>


          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#FFC000]">ESCRÍBENOS</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#FFC000]"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#FFC000]"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Mensaje" 
                  rows="4" 
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#FFC000]"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-[#FFC000] text-black px-6 py-3 rounded font-bold hover:bg-white transition-colors"
              >
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;