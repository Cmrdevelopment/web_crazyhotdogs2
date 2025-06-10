// src/App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FranchiseSection from './components/FranchiseSection';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
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
          </>
        );
    }
  };

  return (
    <div className="font-sans">
      <Navbar onNavigate={setCurrentSection} />
      <main className="pt-16">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
