'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation(['about', 'common']);

  return (
    <section id="about" className="service-page service-page--about">
      <div className="service-page-cover">
        <div className="container">
          <div className="service-page-header">
            <h1 className="service-page-title">{t('section.title', { ns: 'about' })}</h1>
            <p className="service-page-subtitle">{t('subtitle', { ns: 'about' })}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li aria-current="page">{t('section.title', { ns: 'about' })}</li>
          </ol>
        </nav>

        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">
              {t('content.lead', { ns: 'about' })}
            </p>
            <p>
              {t('content.paragraph1', { ns: 'about' })}
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">{t('stats.experience.number', { ns: 'about' })}</div>
              <div className="stat-label">{t('stats.experience.label', { ns: 'about' })}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{t('stats.location.number', { ns: 'about' })}</div>
              <div className="stat-label">{t('stats.location.label', { ns: 'about' })}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{t('stats.reach.number', { ns: 'about' })}</div>
              <div className="stat-label">{t('stats.reach.label', { ns: 'about' })}</div>
            </div>
          </div>
          <div className="about-cta">
            <Link href="/usluge" className="btn btn-primary">
              {t('cta.services', { ns: 'about' })}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
