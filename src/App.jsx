import { useState } from 'react';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FranchiseSection from './components/FranchiseSection';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  // --- AÑADIDO: Estado para controlar la visibilidad del menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch(currentSection) {
      case 'menu':
        return <MenuSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      case 'franquicia':
        return <FranchiseSection />;
      default:
        return (
          <>
            <HeroSection />
            <MenuSection />
            <Testimonials />
            <AboutSection />
            <ContactSection />
            {/* Parece que tienes ContactSection duplicado aquí, lo mantengo por si es intencional */}
            <ContactSection /> 
          </>
        );
    }
  };

  // --- MODIFICADO: Función para cambiar la sección y cerrar el menú móvil
  const handleNavigationClick = (section) => {
    setCurrentSection(section);
    setIsMobileMenuOpen(false); // Cierra el menú móvil al hacer clic en un enlace
  };

  return (
    <div className="font-sans">
      <nav className="fixed w-full bg-black z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-[#FFC000]" style={{ fontFamily: 'Grobold, sans-serif' }}>
              CRAZY HOT DOGS
            </div>

            {/* --- MODIFICADO: Oculta el menú de escritorio en móviles */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => handleNavigationClick('home')} 
                className="text-white hover:text-[#FFC000] transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => handleNavigationClick('menu')} 
                className="text-white hover:text-[#FFC000] transition-colors"
              >
                Menú
              </button>
              <button 
                onClick={() => handleNavigationClick('about')} 
                className="text-white hover:text-[#FFC000] transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => handleNavigationClick('contact')} 
                className="text-white hover:text-[#FFC000] transition-colors"
              >
                Contacto
              </button>
              <button 
                onClick={() => handleNavigationClick('franquicia')} 
                className="text-white hover:text-[#FFC000] transition-colors"
              >
                Franquicia
              </button>
            </div>

            {/* --- AÑADIDO: Botón de menú hamburguesa para móviles */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                {/* Icono de hamburguesa (puedes usar un SVG o librería de iconos) */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Cambia el icono según el estado del menú */}
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> // Icono de "X"
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> // Icono de hamburguesa
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- AÑADIDO: Menú móvil desplegable */}
        {/* Usa 'transform' y 'translate-y-0' para animar la entrada desde arriba */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black transition-all duration-300 ease-in-out`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <button 
              onClick={() => handleNavigationClick('home')} 
              className="block text-white hover:text-[#FFC000] py-2 px-4 rounded text-center w-full transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => handleNavigationClick('menu')} 
              className="block text-white hover:text-[#FFC000] py-2 px-4 rounded text-center w-full transition-colors"
            >
              Menú
            </button>
            <button 
              onClick={() => handleNavigationClick('about')} 
              className="block text-white hover:text-[#FFC000] py-2 px-4 rounded text-center w-full transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => handleNavigationClick('contact')} 
              className="block text-white hover:text-[#FFC000] py-2 px-4 rounded text-center w-full transition-colors"
            >
              Contacto
            </button>
            <button 
              onClick={() => handleNavigationClick('franquicia')} 
              className="block text-white hover:text-[#FFC000] py-2 px-4 rounded text-center w-full transition-colors"
            >
              Franquicia
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
}

export default App;