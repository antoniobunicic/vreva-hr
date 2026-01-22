import React from 'react';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation('services');

  const serviceKeys = ['fullstack', 'leadership', 'modernization'];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{t('section.title')}</h2>
        <div className="services-grid">
          {serviceKeys.map((key) => (
            <div key={key} className="service-card">
              <h3 className="service-title">{t(`cards.${key}.title`)}</h3>
              <p className="service-description">{t(`cards.${key}.description`)}</p>
              <ul className="service-capabilities">
                {t(`cards.${key}.capabilities`, { returnObjects: true }).map((capability, capIndex) => (
                  <li key={capIndex}>{capability}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
