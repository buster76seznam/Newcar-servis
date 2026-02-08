import React from 'react';

const PriceList: React.FC = () => {
  const prices = [
    { name: "Hodinová sazba - mechanické práce", price: "1 200 Kč / hod" },
    { name: "Hodinová sazba - elektrikářské práce", price: "1 400 Kč / hod" },
    { name: "Diagnostika vozidla (MAN / IVECO)", price: "1 500 Kč" },
    { name: "Výměna oleje a filtrů (práce)", price: "od 1 000 Kč" },
    { name: "Kontrola brzdového systému", price: "od 800 Kč" },
    { name: "Příprava na STK", price: "od 2 500 Kč" },
    { name: "Plnění klimatizace", price: "od 1 200 Kč" },
    { name: "Geometrie náprav", price: "od 1 800 Kč" },
  ];

  return (
    <section id="pricelist" className="pricelist-section">
      <div className="container">
        <h2 className="section-title">CENÍK SLUŽEB</h2>
        <div className="pricelist-container">
          <p className="pricelist-note">Uvedené ceny jsou bez DPH a orientační. Konečná cena se může lišit dle náročnosti a modelu vozu.</p>
          <div className="pricelist-table">
            {prices.map((item, index) => (
              <div className="price-row" key={index}>
                <div className="price-name">{item.name}</div>
                <div className="price-value">{item.price}</div>
              </div>
            ))}
          </div>
          <div className="pricelist-cta">
            <p>Potřebujete přesnou kalkulaci?</p>
            <a href="#contact" className="btn">Nezávazná poptávka</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
