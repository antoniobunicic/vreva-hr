import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const slugToKey = {
  'web-development': 'webdev',
  'software-development': 'fullstack',
  'it-consulting': 'leadership',
};

const featureIcons = {
  custom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/>
    </svg>
  ),
  responsive: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12" y2="18"/>
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  price: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
};

function ServiceDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation(['services', 'common']);

  const key = slugToKey[slug];
  if (!key) {
    return <Navigate to="/services" replace />;
  }

  const sections = t(`detail.${key}.sections`, { ns: 'services', returnObjects: true, defaultValue: null });
  const features = t(`detail.${key}.features`, { ns: 'services', returnObjects: true, defaultValue: null });

  return (
    <section className="service-page">
      <div className="container">
        <div className="service-page-header">
          <h1 className="service-page-title">{t(`detail.${key}.hero`, { ns: 'services' })}</h1>
          <p className="service-page-subtitle">{t(`detail.${key}.subtitle`, { ns: 'services' })}</p>
        </div>

        <div className="service-detail-content">
          <p className="service-detail-intro">{t(`detail.${key}.intro`, { ns: 'services' })}</p>

          {features && Array.isArray(features) && (
            <div className="service-features">
              {features.map((feature, i) => (
                <div key={i} className="service-feature-card">
                  <div className="service-feature-icon">
                    {featureIcons[feature.icon]}
                  </div>
                  <h3 className="service-feature-title">{feature.title}</h3>
                  <p className="service-feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          {sections && Array.isArray(sections) && (
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
          )}

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
