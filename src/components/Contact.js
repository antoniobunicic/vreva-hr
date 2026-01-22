import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation('contact');

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-title">{t('title')}</h2>
          <p className="contact-intro">
            {t('intro')}
          </p>
          <div className="contact-cta">
            <a href="mailto:antonio.bunicic@gmail.com" className="btn btn-primary btn-large">
              {t('cta')}
            </a>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">{t('labels.email')}</span>
              <a href="mailto:antonio.bunicic@gmail.com">antonio.bunicic@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">{t('labels.location')}</span>
              <span>{t('values.location')}</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">{t('labels.linkedin')}</span>
              <a
                href="https://linkedin.com/in/b-antonio"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/b-antonio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
