'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactBody from '../components/ContactBody';

function ContactPage() {
  const { t } = useTranslation('contact');

  return (
    <div className="contact-page">
      <div className="container">
        <header className="contact-page-head">
          <span className="contact-page-eyebrow">{t('page.eyebrow')}</span>
          <h1 className="contact-page-title">{t('page.heading')}</h1>
          <p className="contact-page-lead">{t('page.subheading')}</p>
        </header>

        <ContactBody source="contact-page" />
      </div>
    </div>
  );
}

export default ContactPage;
