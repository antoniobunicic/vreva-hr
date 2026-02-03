import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const slugToKey = {
  'web-development': 'webdev',
  'software-development': 'fullstack',
  'it-consulting': 'leadership',
};

function ServiceDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation(['services', 'common']);

  const key = slugToKey[slug];
  if (!key) {
    return <Navigate to="/services" replace />;
  }

  const sections = t(`detail.${key}.sections`, { ns: 'services', returnObjects: true });

  return (
    <section className="service-page">
      <div className="container">
        <div className="service-page-header">
          <h1 className="service-page-title">{t(`detail.${key}.hero`, { ns: 'services' })}</h1>
          <p className="service-page-subtitle">{t(`detail.${key}.subtitle`, { ns: 'services' })}</p>
        </div>

        <div className="service-detail-content">
          <p className="service-detail-intro">{t(`detail.${key}.intro`, { ns: 'services' })}</p>

          <div className="service-detail-sections">
            {sections.map((section, i) => (
              <div key={i} className="service-detail-section">
                <h2 className="service-detail-section-title">{section.title}</h2>
                <ul className="service-detail-list">
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="service-cta">
            <h2 className="service-cta-title">{t(`detail.${key}.cta.title`, { ns: 'services' })}</h2>
            <p className="service-cta-description">{t(`detail.${key}.cta.description`, { ns: 'services' })}</p>
            <Link to="/#contact" className="btn btn-primary">
              {t(`detail.${key}.cta.button`, { ns: 'services' })}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetailPage;
