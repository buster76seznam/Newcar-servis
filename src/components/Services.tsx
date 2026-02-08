import React from 'react';
import { Wrench, ShoppingCart, FileCheck, Users, ShieldCheck, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Wrench size={40} />,
      title: "Servis MAN a IVECO",
      description: "Kompletní diagnostika a opravy nákladních vozidel. Specializujeme se na značky MAN a IVECO s využitím nejmodernějších technologií."
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "Prodej náhradních dílů",
      description: "Široký sortiment originálních i aftermarket náhradních dílů skladem. Rychlé dodání a odborné poradenství při výběru."
    },
    {
      icon: <FileCheck size={40} />,
      title: "Pojištění a likvidace",
      description: "Rychlá domluva s pojišťovnami. Vyřídíme za vás veškerou administrativu spojenou s pojistnou událostí."
    },
    {
      icon: <Users size={40} />,
      title: "Vyškolený personál",
      description: "Náš tým prochází pravidelnými školeními přímo u výrobců. Garantujeme odbornost a profesionální přístup."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Záruka kvality",
      description: "Na veškeré provedené práce a dodané díly poskytujeme záruku. Vaše spokojenost a bezpečnost je pro nás prioritou."
    },
    {
      icon: <Clock size={40} />,
      title: "Expresní opravy",
      description: "Chápeme, že čas jsou peníze. Běžné závady řešíme v nejkratším možném termínu, aby vaše vozy mohly opět vydělávat."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">NAŠE SLUŽBY</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
