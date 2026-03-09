'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ContactForm from '../../components/ContactForm';
import PricingModal from '../../components/PricingModal';

function WebdevFeaturePage({ featureSlug }) {
  const { t } = useTranslation('services');
  const [modalPackage, setModalPackage] = useState(null);

  const page = t(`detail.webdev.featurePages.${featureSlug}`, { returnObjects: true });
  const pricing = featureSlug === 'cijene'
    ? t('detail.webdev.pricing', { returnObjects: true })
    : null;

  return (
    <>
    {modalPackage && (
      <PricingModal packageName={modalPackage} onClose={() => setModalPackage(null)} />
    )}
    <section className="service-page service-page--webdev feature-page">
      <div className="service-page-cover">
        <div className="container">
          <div className="service-page-header">
            <h1 className="service-page-title">{page.hero}</h1>
            <p className="service-page-subtitle">{page.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li><Link href="/usluge">{t('nav.services', { ns: 'common' })}</Link></li>
            <li><Link href="/usluge/izrada-web-stranica">{t('detail.webdev.hero')}</Link></li>
            <li aria-current="page">{page.hero}</li>
          </ol>
        </nav>

        <div className="service-detail-content">
          <p className="service-detail-intro">{page.intro}</p>

          {page.sections && Array.isArray(page.sections) && page.sections.map((section, i) => (
            <div key={i} className="feature-section">
              <h2 className="feature-section-title">{section.title}</h2>
              {section.body && <p className="feature-section-body">{section.body}</p>}
              {section.bullets && Array.isArray(section.bullets) && (
                <ul className="niche-bullets">
                  {section.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}

          {pricing && pricing.packages && Array.isArray(pricing.packages) && (
            <div className="pricing-cards" style={{ marginBottom: '4rem' }}>
              {pricing.packages.map((pkg, i) => (
                <div key={i} className={`pricing-card${i === 1 ? ' pricing-card--featured' : ''}`}>
                  {i === 1 && (
                    <span className="pricing-card-badge">
                      {t('detail.webdev.pricing.popularBadge', { ns: 'services' })}
                    </span>
                  )}
                  <p className="pricing-card-name">{pkg.name}</p>
                  <div className="pricing-card-price">
                    <span className="pricing-amount">{pkg.price}</span>
                    {pkg.period && <span className="pricing-period">{pkg.period}</span>}
                  </div>
                  <p className="pricing-note">{pkg.note}</p>
                  <p className="pricing-card-description">{pkg.description}</p>
                  <ul className="pricing-card-features">
                    {pkg.features.map((f, j) => <li key={j}>{f}</li>)}
                  </ul>
                  <button
                    className="btn btn-primary pricing-card-cta"
                    onClick={() => setModalPackage(pkg.name)}
                  >
                    {t('detail.webdev.pricing.requestQuote')}
                  </button>
                </div>
              ))}
            </div>
          )}

          {pricing && (
            <p className="pricing-footnote">
              {t('detail.webdev.pricing.footnote')}
            </p>
          )}

          {!pricing && (
            <div className="service-cta">
              <h2 className="service-cta-title">{page.cta.title}</h2>
              <p className="service-cta-description">{page.cta.description}</p>
              <ContactForm source={`webdev-${featureSlug}`} />
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
}

export default WebdevFeaturePage;
