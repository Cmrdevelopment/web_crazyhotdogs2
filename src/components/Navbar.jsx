import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { key: '/', label: 'Inicio' },
    { key: '/menu', label: 'Menú' },
    { key: '/about', label: 'Nosotros' },
    { key: '/contact', label: 'Con-tacto' },
    { key: '/franquicia', label: 'Franquicia' },
  ];

  return (
    <nav className="fixed w-full bg-black z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Título */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://res.cloudinary.com/dhfkoxnrq/image/upload/v1708693644/Logos%20Cracy/logo_mostaza_reduced_qfpwhv.png" 
              alt="Logo Crazy Hot Dogs" 
              className="w-14 h-auto"
            />
            <div className="text-2xl font-bold text-[#FFC000]"  style={{ fontFamily: 'Grobold, sans-serif' }}>
              CRAZY HOT DOGS
            </div>
          </div>

          {/* Menú escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ key, label }) => (
              <Link
                key={key}
                to={key}
                className="text-white hover:text-[#FFC000] transition-colors"
              >
                {label}
              </Link>
            ))}

            {/* Botón App escritorio */}
            <Link to="https://play.google.com/store/apps/details?id=com.turbopos.cdh">
              <button className="bg-white text-black font-bold px-4 py-1 rounded-lg hover:bg-[#FFC000] transition-colors">
                📱 App
              </button>
            </Link>
          </div>

          {/* Botón hamburguesa */}
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

      {/* Menú móvil */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          {navItems.map(({ key, label }) => (
            <Link
              key={key}
              to={key}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white hover:text-[#FFC000] py-2 px-4 rounded text-center w-full transition-colors"
            >
              {label}
            </Link>
          ))}

          {/* Botón App móvil */}
          <Link to="https://play.google.com/store/apps/details?id=com.turbopos.cdh">
            <button className="bg-white text-black font-bold px-4 py-1 rounded-lg hover:bg-[#FFC000] w-32 text-center mt-4 transition-colors">
              📱 App
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
