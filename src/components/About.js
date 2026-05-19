'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation(['about', 'approach', 'common']);

  const principleKeys = ['collaborative', 'detailOriented', 'pragmatic'];
  const processKeys = ['discovery', 'planning', 'development', 'delivery'];

  return (
    <section id="about" className="service-page service-page--about">
      <div className="service-page-cover">
        <div className="container">
          <div className="service-page-header">
            <h1 className="service-page-title">{t('section.title', { ns: 'about' })}</h1>
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
        </div>

        <h3 className="subsection-title">{t('process.title', { ns: 'approach' })}</h3>
        <div className="process-timeline">
          {processKeys.map((key, index) => (
            <div key={key} className="process-step">
              <div className="process-number">{index + 1}</div>
              <div className="process-content">
                <h4 className="process-phase">{t(`process.steps.${key}.phase`, { ns: 'approach' })}</h4>
                <p className="process-description">{t(`process.steps.${key}.description`, { ns: 'approach' })}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">{t('principles.title', { ns: 'approach' })}</h3>
        <div className="about-stats about-stats--principles">
          {principleKeys.map((key) => (
            <div key={key} className="stat-item">
              <div className="stat-number">{t(`principles.items.${key}.title`, { ns: 'approach' })}</div>
              <div className="stat-label">{t(`principles.items.${key}.description`, { ns: 'approach' })}</div>
            </div>
          ))}
        </div>

        <div className="about-cta">
          <Link href="/usluge" className="btn btn-primary">
            {t('cta.services', { ns: 'about' })}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
