import { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <Truck className="logo-icon" size={32} />
          <div className="logo-text">
            <span className="logo-main">NEWCAR</span>
            <span className="logo-sub">SERVIS</span>
          </div>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Domů</a></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Služby</a></li>
            <li><a href="#pricelist" onClick={() => setIsMobileMenuOpen(false)}>Ceník</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:+420111222333" className="phone-link">
            <Phone size={18} />
            <span>+420 111 222 333</span>
          </a>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
