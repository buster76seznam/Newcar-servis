const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>Newcar Servis</h3>
            <p>Váš spolehlivý partner pro nákladní vozy MAN a IVECO.</p>
          </div>
          <div className="footer-col">
            <h3>Rychlé odkazy</h3>
            <ul>
              <li><a href="#home">Domů</a></li>
              <li><a href="#services">Služby</a></li>
              <li><a href="#pricelist">Ceník</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Právní informace</h3>
            <ul>
              <li><a href="#">Ochrana osobních údajů</a></li>
              <li><a href="#">Obchodní podmínky</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Newcar Servis s.r.o. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
