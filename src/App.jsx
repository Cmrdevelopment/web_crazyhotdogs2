import { useState } from 'react';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch(currentSection) {
      case 'menu':
        return <MenuSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSection />
            <MenuSection />
            <Testimonials />
            <AboutSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="font-sans">
      <nav className="fixed w-full bg-black z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-[#FFC000]" style={{ fontFamily: 'Grobold, sans-serif' }}>
              CRAZY HOT DOGS
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentSection('home')} 
                className="text-white hover:text-[#FFC000] transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => setCurrentSection('menu')} 
                className="text-white hover:text-[#FFC000] transition-colors"
              >
                Menú
              </button>
              <button 
                onClick={() => setCurrentSection('about')} 
                className="text-white hover:text-[#FFC000] transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => setCurrentSection('contact')} 
                className="text-white hover:text-[#FFC000] transition-colors"
              >
                Contacto
              </button>
            </div>
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

// DONE