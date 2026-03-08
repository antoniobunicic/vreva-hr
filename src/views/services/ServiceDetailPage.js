'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const nicheIcons = {
  ugostiteljstvo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22h8"/>
      <path d="M7 10h10"/>
      <path d="M12 15v7"/>
      <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/>
    </svg>
  ),
  apartmani: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  obrtnici: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  'male-tvrtke': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  ),
  turizam: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  ),
  saloni: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/>
      <circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/>
      <line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  ),
  poliklinike: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5.5c-1.074-.586-2.583-1.5-4-1.5-2.1 0-4 1.247-4 5 0 4.899 1.056 8.41 2.671 10.537.573.756 1.97.521 2.567-.236.398-.505.819-1.439 1.262-2.801.292-.771.892-1.504 1.5-1.5.602 0 1.21.737 1.5 1.5.443 1.362.864 2.295 1.262 2.8.597.759 2 .993 2.567.237C18.944 17.41 20 13.9 20 9c0-3.74-1.908-5-4-5-1.423 0-2.92.911-4 1.5"/>
      <path d="M12 5.5l3 1.5"/>
    </svg>
  ),
  'odvjetnicki-uredi': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  'kulturne-ustanove': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="22" x2="21" y2="22"/>
      <line x1="6" y1="18" x2="6" y2="11"/>
      <line x1="10" y1="18" x2="10" y2="11"/>
      <line x1="14" y1="18" x2="14" y2="11"/>
      <line x1="18" y1="18" x2="18" y2="11"/>
      <polygon points="12 2 20 7 4 7"/>
    </svg>
  ),
  prijevoz: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
      <circle cx="7" cy="17" r="2"/>
      <path d="M9 17h6"/>
      <circle cx="17" cy="17" r="2"/>
    </svg>
  ),
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

function ServiceDetailPage({ serviceKey }) {
  const { t } = useTranslation(['services', 'common']);

  const key = serviceKey;

  const sections = t(`detail.${key}.sections`, { ns: 'services', returnObjects: true, defaultValue: null });
  const features = t(`detail.${key}.features`, { ns: 'services', returnObjects: true, defaultValue: null });
  const niches = t(`detail.${key}.niches`, { ns: 'services', returnObjects: true, defaultValue: null });

  return (
    <section className={`service-page service-page--${key}`}>
      <div className={`service-page-cover service-page-cover--${key}`}>
        <div className="container">
          <div className="service-page-header">
            <h1 className="service-page-title">{t(`detail.${key}.hero`, { ns: 'services' })}</h1>
            <p className="service-page-subtitle">{t(`detail.${key}.subtitle`, { ns: 'services' })}</p>
          </div>
        </div>
      </div>

      <div className="container">
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

          {niches && niches.items && Array.isArray(niches.items) && (
            <div className="service-why-us">
              <h2 className="service-niches-title">{t(`detail.${key}.whyUsTitle`, { ns: 'services' })}</h2>
              <p className="service-detail-intro">{t(`detail.${key}.whyUsText`, { ns: 'services' })}</p>
            </div>
          )}

          {niches && niches.items && Array.isArray(niches.items) && (
            <div className="service-niches">
              <h2 className="service-niches-title">{niches.title}</h2>
              <div className="service-niches-grid">
                {niches.items.map((niche, i) => (
                  <Link key={i} href={`/usluge/izrada-web-stranica/${niche.slug}`} className="service-niche-item">
                    <span className="service-niche-more">Vidi više →</span>
                    {nicheIcons[niche.slug] && (
                      <div className="service-niche-icon">{nicheIcons[niche.slug]}</div>
                    )}
                    <h3 className="service-niche-heading">{niche.heading}</h3>
                    <p className="service-niche-description">{niche.description}</p>
                  </Link>
                ))}
              </div>
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
            <Link href="/#contact" className="btn btn-primary">
              {t(`detail.${key}.cta.button`, { ns: 'services' })}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


export default ServiceDetailPage;
