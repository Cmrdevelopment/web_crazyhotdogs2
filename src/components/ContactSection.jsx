const ContactSection = () => {
  return (
    <div className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12 text-[#FFC000] tracking-wide"style={{ fontFamily: 'Grobold, sans-serif' }}>Con - tacto</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#FFC000]">ENCUÉNTRANOS</h3>
            <div className="h-64 bg-gray-800 rounded-lg mb-6 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.888614979461!2d-99.1699496845266!3d19.42702074620239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff37609e3a9d%3A0x1cfd4042316d8830!2sPalacio%20de%20Bellas%20Artes!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
            <p className="mb-2">Av. Juárez S/N, Centro Histórico</p>
            <p className="mb-4">Ciudad de México, CDMX</p>
            <p className="text-xl font-bold text-[#FFC000]">Tel: 55 1234 5678</p>
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