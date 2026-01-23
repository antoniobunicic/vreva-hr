import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation('about');

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t('section.title')}</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">
              {t('content.lead')}
            </p>
            <p>
              {t('content.paragraph1')}
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">{t('stats.experience.number')}</div>
              <div className="stat-label">{t('stats.experience.label')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{t('stats.location.number')}</div>
              <div className="stat-label">{t('stats.location.label')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{t('stats.reach.number')}</div>
              <div className="stat-label">{t('stats.reach.label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
