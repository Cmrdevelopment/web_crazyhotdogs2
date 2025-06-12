import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FranchiseSection from './components/FranchiseSection';
import Footer from './components/Footer';



const App = () => {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <MenuSection />
                  <Testimonials />
                  <AboutSection />
                  <ContactSection />
                </>
              }
            />
            <Route path="/menu" element={<MenuSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/franquicia" element={<FranchiseSection />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
