'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactBody from './ContactBody';

function Contact() {
  const { t } = useTranslation('contact');

  return (
    <section id="contact" className="contact">
      <div className="container">
        <header className="contact-head">
          <h2 className="contact-title">{t('title')}</h2>
          <p className="contact-intro">{t('intro')}</p>
          <a href="mailto:info@vreva.hr" className="contact-bigmail">
            info@vreva.hr<svg className="contact-bigmail-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.5 19.5 18.5 5.5" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="butt" /><path d="M8.5 5H19v10.5" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="square" strokeLinejoin="miter" /></svg>
          </a>
        </header>

        <ContactBody source="homepage" />
      </div>
    </section>
  );
}

export default Contact;
