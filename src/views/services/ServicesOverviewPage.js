'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// Same order as the homepage list. Services with their own page link there;
// the rest go to the contact form.
const services = [
  { key: 'webdev',     href: '/usluge/izrada-web-stranica' },
  { key: 'fullstack',  href: '/usluge/razvoj-softvera' },
  { key: 'ai',         href: '/usluge/ai-integracija' },
  { key: 'leadership', href: '/usluge/it-savjetovanje' },
  { key: 'marketing',  href: '/#contact' },
];

function ServicesOverviewPage() {
  const { t } = useTranslation(['services', 'common']);
  const cta = t('overview.cta', { returnObjects: true });

  return (
    <article className="sl sl--overview">
      <header className="sl-hero container">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li aria-current="page">{t('overview.title')}</li>
          </ol>
        </nav>
        <h1 className="sl-title">{t('overview.title')}</h1>
        <p className="sl-lead">{t('overview.subtitle')}</p>
      </header>

      <section className="container so-section">
        <ol className="so-list">
          {services.map((service, i) => (
            <li key={service.key}>
              <Link href={service.href} className="so-row">
                <span className="so-index">{String(i + 1).padStart(2, '0')}</span>
                <div className="so-head">
                  <h2 className="so-title">{t(`cards.${service.key}.title`)}</h2>
                  <p className="so-desc">{t(`cards.${service.key}.description`)}</p>
                </div>
                <ul className="so-caps">
                  {t(`cards.${service.key}.capabilities`, { returnObjects: true }).map((cap) => (
                    <li key={cap}>{cap}</li>
                  ))}
                </ul>
                <span className="so-arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="sl-cta container">
        <div className="sl-cta-inner">
          <div className="sl-cta-text">
            <h2 className="sl-cta-title">{cta.title}</h2>
            <p className="sl-cta-description">{cta.description}</p>
          </div>
          <Link href="/#contact" className="btn btn-primary sl-cta-button">{cta.button}</Link>
        </div>
      </section>
    </article>
  );
}

export default ServicesOverviewPage;
