'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// Core services (with dedicated pages) first, then the marketing offering.
const services = [
  { key: 'webdev',     href: '/usluge/izrada-web-stranica', cta: 'learnMore',  internal: true },
  { key: 'fullstack',  href: '/usluge/razvoj-softvera',     cta: 'learnMore',  internal: true },
  { key: 'ai',         href: '/usluge/ai-integracija',      cta: 'learnMore',  internal: true },
  { key: 'leadership', href: '/usluge/it-savjetovanje',     cta: 'learnMore',  internal: true },
  { key: 'marketing',  href: '#contact',                    cta: 'contactCta', internal: false },
];

function Services() {
  const { t } = useTranslation('services');
  const listRef = useRef(null);

  // Each row's divider draws left → right when that row scrolls into view.
  // Content is never hidden — the section peeks out under the hero and must
  // read from the start; only the hairlines animate.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.drawn = ''; // data attr: React won't reset it on re-render
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -20% 0px' }
    );
    list.querySelectorAll('.services-line').forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{t('section.title')}</h2>

        <div className="services-list" ref={listRef}>
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
