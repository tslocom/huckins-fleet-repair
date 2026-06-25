import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import EmergencyMobileBar from './components/EmergencyMobileBar';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import RatesPage from './components/pages/RatesPage';
import ContactPage from './components/pages/ContactPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Navigation />
    <div className="pb-24 md:pb-0">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/rates" element={<RatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
    <Footer />
    <EmergencyMobileBar />
  </BrowserRouter>
);

export default App;
