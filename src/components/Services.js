'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// Core services (with dedicated pages) first, then the marketing offering.
const services = [
  { key: 'webdev',     href: '/usluge/izrada-web-stranica', cta: 'learnMore',  internal: true },
  { key: 'fullstack',  href: '/usluge/razvoj-softvera',     cta: 'learnMore',  internal: true },
  { key: 'leadership', href: '/usluge/it-savjetovanje',     cta: 'learnMore',  internal: true },
  { key: 'branding',   href: '#contact',                    cta: 'contactCta', internal: false },
  { key: 'marketing',  href: '#contact',                    cta: 'contactCta', internal: false },
  { key: 'ads',        href: '#contact',                    cta: 'contactCta', internal: false },
];

function Services() {
  const { t } = useTranslation('services');

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{t('section.title')}</h2>

        <div className="services-list">
          {services.map((service, i) => {
            const title = t(`cards.${service.key}.title`);
            const label = t(`overview.${service.cta}`);
            const body = (
              <>
                <span className="services-line-index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="services-line-title">{title}</h3>
                <p className="services-line-desc">{t(`cards.${service.key}.description`)}</p>
                <span className="services-line-arrow" aria-hidden="true">&rarr;</span>
              </>
            );

            return service.internal ? (
              <Link
                key={service.key}
                href={service.href}
                className="services-line"
                aria-label={`${title} — ${label}`}
              >
                {body}
              </Link>
            ) : (
              <a
                key={service.key}
                href={service.href}
                className="services-line"
                aria-label={`${title} — ${label}`}
              >
                {body}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
