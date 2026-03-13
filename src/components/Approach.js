'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function Approach() {
  const { t } = useTranslation(['approach', 'common']);

  const principleKeys = ['collaborative', 'detailOriented', 'pragmatic'];
  const processKeys = ['discovery', 'planning', 'development', 'delivery'];

  return (
    <section id="approach" className="service-page">
      <div className="service-page-cover">
        <div className="container">
          <div className="service-page-header">
            <h1 className="service-page-title">{t('section.title', { ns: 'approach' })}</h1>
            <p className="service-page-subtitle">{t('intro', { ns: 'approach' })}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li><Link href="/o-nama">{t('nav.about', { ns: 'common' })}</Link></li>
            <li aria-current="page">{t('section.title', { ns: 'approach' })}</li>
          </ol>
        </nav>

        <h3 className="subsection-title">{t('principles.title')}</h3>
        <div className="principles-grid">
          {principleKeys.map((key) => (
            <div key={key} className="principle-card">
              <h4 className="principle-title">{t(`principles.items.${key}.title`)}</h4>
              <p className="principle-description">{t(`principles.items.${key}.description`)}</p>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">{t('process.title')}</h3>
        <div className="process-timeline">
          {processKeys.map((key, index) => (
            <div key={key} className="process-step">
              <div className="process-number">{index + 1}</div>
              <div className="process-content">
                <h4 className="process-phase">{t(`process.steps.${key}.phase`)}</h4>
                <p className="process-description">{t(`process.steps.${key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
