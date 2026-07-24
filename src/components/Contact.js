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
        </header>

        <ContactBody source="homepage" />
      </div>
    </section>
  );
}

export default Contact;
