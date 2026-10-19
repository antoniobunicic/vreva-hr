'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ContactBody from '../components/ContactBody';

function ContactPage() {
  const { t } = useTranslation(['contact', 'common']);

  return (
    <article className="sl sl--contact">
      <header className="sl-hero container">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li aria-current="page">{t('page.title')}</li>
          </ol>
        </nav>
        <h1 className="sl-title">{t('page.title')}</h1>
        <p className="sl-lead">{t('page.lead')}</p>
        <a href="mailto:info@vreva.hr" className="contact-bigmail">
          info@vreva.hr<span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="container contact-page-section">
        <ContactBody source="contact-page" />
      </section>
    </article>
  );
}

export default ContactPage;
