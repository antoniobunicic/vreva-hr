'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const slugMap = {
  webdev: 'izrada-web-stranica',
  fullstack: 'razvoj-softvera',
  leadership: 'it-savjetovanje',
};

function Services() {
  const { t } = useTranslation('services');

  const serviceKeys = ['webdev', 'fullstack', 'leadership'];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{t('section.title')}</h2>
        <div className="services-grid">
          {serviceKeys.map((key) => (
            <Link key={key} href={`/usluge/${slugMap[key]}`} className="service-card service-card-link">
              <h3 className="service-title">{t(`cards.${key}.title`)}</h3>
              <p className="service-description">{t(`cards.${key}.description`)}</p>
              <ul className="service-capabilities">
                {t(`cards.${key}.capabilities`, { returnObjects: true }).map((capability, capIndex) => (
                  <li key={capIndex}>{capability}</li>
                ))}
              </ul>
              <span className="service-learn-more">{t('overview.learnMore')} &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
