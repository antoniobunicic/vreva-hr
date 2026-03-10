'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import nicheIcons from '../../utils/nicheIcons';
import {
  PuzzlePiece,
  DeviceMobile,
  Rocket,
  MagnifyingGlass,
  CurrencyDollar,
  Headset,
} from '@phosphor-icons/react';

const featureIcons = {
  custom: <PuzzlePiece weight="light" />,
  responsive: <DeviceMobile weight="light" />,
  rocket: <Rocket weight="light" />,
  search: <MagnifyingGlass weight="light" />,
  price: <CurrencyDollar weight="light" />,
  support: <Headset weight="light" />,
};

const featureSlugMap = {
  custom: 'web-po-mjeri',
  responsive: 'responzivan-dizajn',
  rocket: 'brza-izrada',
  search: 'seo-optimizacija',
  price: 'cijene',
  support: 'odrzavanje-i-podrska',
};

function ServiceDetailPage({ serviceKey }) {
  const { t } = useTranslation(['services', 'common']);

  const key = serviceKey;

  const sections = t(`detail.${key}.sections`, { ns: 'services', returnObjects: true, defaultValue: null });
  const features = t(`detail.${key}.features`, { ns: 'services', returnObjects: true, defaultValue: null });
  const niches = t(`detail.${key}.niches`, { ns: 'services', returnObjects: true, defaultValue: null });
  const pricing = t(`detail.${key}.pricing`, { ns: 'services', returnObjects: true, defaultValue: null });

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
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li><Link href="/usluge">{t('nav.services', { ns: 'common' })}</Link></li>
            <li aria-current="page">{t(`detail.${key}.hero`, { ns: 'services' })}</li>
          </ol>
        </nav>

        <div className="service-detail-content">
          <p className="service-detail-intro">{t(`detail.${key}.intro`, { ns: 'services' })}</p>

          {features && Array.isArray(features) && (
            <div className="service-features">
              {features.map((feature, i) => (
                <Link key={i} href={`/usluge/izrada-web-stranica/${featureSlugMap[feature.icon]}`} className="service-feature-card">
                  <div className="service-feature-icon">
                    {featureIcons[feature.icon]}
                  </div>
                  <h3 className="service-feature-title">{feature.title}</h3>
                  <p className="service-feature-description">{feature.description}</p>
                </Link>
              ))}
            </div>
          )}

          {niches && niches.items && Array.isArray(niches.items) && (
            <div className="service-why-us">
              <h2 className="service-niches-title">{t(`detail.${key}.whyUsTitle`, { ns: 'services' })}</h2>
              <p className="service-detail-intro">{t(`detail.${key}.whyUsText`, { ns: 'services' })}</p>
              <Link href="/usluge/izrada-web-stranica/web-po-mjeri" className="inline-link">
                {t('detail.webdev.featurePages.web-po-mjeri.hero', { ns: 'services' })} →
              </Link>
            </div>
          )}

          {pricing && typeof pricing === 'object' && (
            <div className="service-pricing service-pricing--teaser">
              <h2 className="service-pricing-title">{pricing.title}</h2>
              <p className="service-pricing-teaser-text">{t(`detail.${key}.pricingTeaser`, { ns: 'services' })}</p>
              <Link href="/usluge/izrada-web-stranica/cijene" className="inline-link">
                {t(`detail.${key}.pricingLink`, { ns: 'services' })} →
              </Link>
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
