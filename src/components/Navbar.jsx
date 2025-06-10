// src/components/Navbar.jsx
import { useState } from 'react';

function Navbar({ onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigationClick = (section) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { key: 'home', label: 'Inicio' },
    { key: 'menu', label: 'Menú' },
    { key: 'about', label: 'Nosotros' },
    { key: 'contact', label: 'Contacto' },
    { key: 'franquicia', label: 'Franquicia' },
  ];

  return (
    <nav className="fixed w-full bg-black z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-[#FFC000]" style={{ fontFamily: 'Grobold, sans-serif' }}>
            CRAZY HOT DOGS
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleNavigationClick(key)}
                className="text-white hover:text-[#FFC000] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          {navItems.map(({ key, label }) => (
            <button 
              key={key}
              onClick={() => handleNavigationClick(key)}
              className="block text-white hover:text-[#FFC000] py-2 px-4 rounded text-center w-full transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
