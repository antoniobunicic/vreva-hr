'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function NicheDetailPage({ niche }) {
  const { t } = useTranslation('services');

  const page = t(`detail.webdev.niches.pages.${niche}`, { returnObjects: true });

  return (
    <section className="service-page service-page--webdev niche-page">
      <div className="service-page-cover service-page-cover--niche">
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

          <ul className="niche-bullets">
            {page.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>

          <div className="service-cta">
            <h2 className="service-cta-title">{page.cta.title}</h2>
            <p className="service-cta-description">{page.cta.description}</p>
            <Link href="/#contact" className="btn btn-primary">
              {page.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NicheDetailPage;
