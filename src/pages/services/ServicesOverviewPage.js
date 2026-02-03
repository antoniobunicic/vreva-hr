import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const serviceKeys = ['webdev', 'fullstack', 'leadership'];
const slugMap = {
  webdev: 'web-development',
  fullstack: 'software-development',
  leadership: 'it-consulting',
};

function ServicesOverviewPage() {
  const { t } = useTranslation('services');

  return (
    <section className="service-page">
      <div className="container">
        <div className="service-page-header">
          <h1 className="service-page-title">{t('overview.title')}</h1>
          <p className="service-page-subtitle">{t('overview.subtitle')}</p>
        </div>
        <div className="services-grid">
          {serviceKeys.map((key) => (
            <Link
              key={key}
              to={`/services/${slugMap[key]}`}
              className="service-card service-card-link"
            >
              <h3 className="service-title">{t(`cards.${key}.title`)}</h3>
              <p className="service-description">{t(`cards.${key}.description`)}</p>
              <ul className="service-capabilities">
                {t(`cards.${key}.capabilities`, { returnObjects: true }).map((cap, i) => (
                  <li key={i}>{cap}</li>
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

export default ServicesOverviewPage;
