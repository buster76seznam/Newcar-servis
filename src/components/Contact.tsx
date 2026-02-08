import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">KONTAKTUJTE NÁS</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <MapPin className="info-icon" size={24} />
              <div>
                <h3>Adresa</h3>
                <p>Koutníkova 123</p>
                <p>500 02 Hradec Králové</p>
              </div>
            </div>
            
            <div className="info-item">
              <Phone className="info-icon" size={24} />
              <div>
                <h3>Telefon</h3>
                <p><a href="tel:+420111222333">+420 111 222 333</a></p>
              </div>
            </div>

            <div className="info-item">
              <Mail className="info-icon" size={24} />
              <div>
                <h3>Email</h3>
                <p><a href="mailto:info@newcarservis.cz">info@newcarservis.cz</a></p>
              </div>
            </div>

            <div className="info-item">
              <Clock className="info-icon" size={24} />
              <div>
                <h3>Otevírací doba</h3>
                <p>Po - Pá: 7:00 - 17:00</p>
                <p>So - Ne: Zavřeno</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.567890123456!2d15.8327!3d50.2092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDEyJzMzLjEiTiAxNcKwNDknNTcuNyJF!5e0!3m2!1scs!2scz!4v1600000000000!5m2!1scs!2scz" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Mapa"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
