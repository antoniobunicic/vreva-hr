'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import webDevImg from '../assets/illustrations/web-dev.png';
import softwareDevImg from '../assets/illustrations/software-dev.png';
import consultingImg from '../assets/illustrations/consulting.png';
import advertisingImg from '../assets/illustrations/advertising.png';
import marketingImg from '../assets/illustrations/marketing.png';
import brandImg from '../assets/illustrations/brand.png';

function Services() {
  const { t } = useTranslation('services');

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{t('section.title')}</h2>

        <div className="bento-grid">
          {/* 1 — top-left wide (2 cols × 1 row) */}
          <Link
            href="/usluge/izrada-web-stranica"
            className="bento-item bento-item--wide-top bento-item--web"
            style={{ backgroundImage: `url(${webDevImg.src})` }}
          >
            <div className="bento-content">
              <h3 className="bento-title">{t('cards.webdev.title')}</h3>
              <p className="bento-desc">{t('cards.webdev.description')}</p>
              <span className="bento-cta">
                <span className="bento-cta-text">{t('overview.learnMore')}</span>
                <span className="bento-cta-arrow" aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </Link>

          {/* 2 — top-right wide (2 cols × 1 row) */}
          <a
            href="#contact"
            className="bento-item bento-item--wide-top bento-item--marketing"
            style={{ backgroundImage: `url(${marketingImg.src})` }}
          >
            <div className="bento-content">
              <h3 className="bento-title">{t('cards.marketing.title')}</h3>
              <p className="bento-desc">{t('cards.marketing.description')}</p>
              <span className="bento-cta">
                <span className="bento-cta-text">{t('overview.contactCta')}</span>
                <span className="bento-cta-arrow" aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </a>

          {/* 3 — left tall (1 col × 2 rows) */}
          <Link
            href="/usluge/it-savjetovanje"
            className="bento-item bento-item--tall bento-item--consulting"
            style={{ backgroundImage: `url(${consultingImg.src})` }}
          >
            <div className="bento-content">
              <h3 className="bento-title">{t('cards.leadership.title')}</h3>
              <p className="bento-desc">{t('cards.leadership.description')}</p>
              <span className="bento-cta">
                <span className="bento-cta-text">{t('overview.learnMore')}</span>
                <span className="bento-cta-arrow" aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </Link>

          {/* 4 — middle row 2 (2 cols × 1 row) */}
          <a
            href="#contact"
            className="bento-item bento-item--mid bento-item--brand"
            style={{ backgroundImage: `url(${brandImg.src})` }}
          >
            <div className="bento-content">
              <h3 className="bento-title">{t('cards.branding.title')}</h3>
              <p className="bento-desc">{t('cards.branding.description')}</p>
              <span className="bento-cta">
                <span className="bento-cta-text">{t('overview.contactCta')}</span>
                <span className="bento-cta-arrow" aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </a>

          {/* 5 — middle row 3 (2 cols × 1 row) */}
          <a
            href="#contact"
            className="bento-item bento-item--mid bento-item--ads"
            style={{ backgroundImage: `url(${advertisingImg.src})` }}
          >
            <div className="bento-content">
              <h3 className="bento-title">{t('cards.ads.title')}</h3>
              <p className="bento-desc">{t('cards.ads.description')}</p>
              <span className="bento-cta">
                <span className="bento-cta-text">{t('overview.contactCta')}</span>
                <span className="bento-cta-arrow" aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </a>

          {/* 6 — right tall (1 col × 2 rows) */}
          <Link
            href="/usluge/razvoj-softvera"
            className="bento-item bento-item--tall bento-item--software"
            style={{ backgroundImage: `url(${softwareDevImg.src})` }}
          >
            <div className="bento-content">
              <h3 className="bento-title">{t('cards.fullstack.title')}</h3>
              <p className="bento-desc">{t('cards.fullstack.description')}</p>
              <span className="bento-cta">
                <span className="bento-cta-text">{t('overview.learnMore')}</span>
                <span className="bento-cta-arrow" aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
