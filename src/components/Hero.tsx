import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>
          <span className="text-highlight">PROFESIONÁLNÍ</span> SERVIS<br />
          NÁKLADNÍCH VOZŮ
        </h1>
        <p className="hero-subtitle">
          Specializace na vozy MAN a IVECO. Komplexní péče, originální náhradní díly 
          a rychlé řešení pojistných událostí v Hradci Králové.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-hero">
            Objednat servis <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
          <a href="#services" className="btn btn-outline">
            Naše služby
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
