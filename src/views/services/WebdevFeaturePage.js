'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ContactBlock from '../../components/ContactBlock';
import PricingModal from '../../components/PricingModal';

// Web development topic pages (web po mjeri, responzivan dizajn, cijene, …).
// Same building blocks as the service pages: hero → titled sections on the
// 1fr / 2fr grid → (pricing packages) → links to the other topics → contact.
function WebdevFeaturePage({ featureSlug }) {
  const { t } = useTranslation(['services', 'common']);
  const [modalPackage, setModalPackage] = useState(null);

  const page = t(`detail.webdev.featurePages.${featureSlug}`, { returnObjects: true });
  const labels = t('detail.webdev.labels', { returnObjects: true });
  const topics = t('detail.webdev.offer.items', { returnObjects: true });
  const pricing = featureSlug === 'cijene' ? t('detail.webdev.pricing', { returnObjects: true }) : null;
  const otherTopics = topics.filter((item) => !item.href.includes(`/${featureSlug}/`));

  return (
    <>
      {modalPackage && (
        <PricingModal packageName={modalPackage} onClose={() => setModalPackage(null)} />
      )}
      <article className="sl sl--feature">
        <header className="sl-hero container">
          <nav aria-label="breadcrumb" className="breadcrumb">
            <ol>
              <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
              <li><Link href="/usluge">{t('nav.services', { ns: 'common' })}</Link></li>
              <li><Link href="/usluge/izrada-web-stranica">{t('detail.webdev.hero')}</Link></li>
              <li aria-current="page">{page.hero}</li>
            </ol>
          </nav>
          <h1 className="sl-title">{page.hero}</h1>
          <p className="sl-lead sl-lead--long">{page.intro}</p>
        </header>

        {Array.isArray(page.sections) && page.sections.map((section) => (
          <section key={section.title} className="sl-section container">
            <h2 className="sl-section-title">{section.title}</h2>
            <div>
              {section.body && <p className="sl-body">{section.body}</p>}
              {Array.isArray(section.bullets) && (
                <ul className="sl-list">
                  {section.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
            </div>
          </section>
        ))}

        {pricing && Array.isArray(pricing.packages) && (
          <section className="container sp-section" aria-label={pricing.title}>
            <div className="sp-grid">
              {pricing.packages.map((pkg, i) => {
                const [name, ...rest] = pkg.name.split('\n');
                return (
                  <div key={pkg.name} className={`sp-card${i === 1 ? ' sp-card--featured' : ''}`}>
                    <div className="sp-head">
                      <p className="sp-name">
                        {name}
                        {rest.length > 0 && <span className="sp-name-sub">{rest.join(' ')}</span>}
                      </p>
                      {i === 1 && <span className="sp-badge">{pricing.popularBadge}</span>}
                    </div>
                    <p className="sp-price">
                      {pkg.price} <span className="sp-note">{pkg.note}</span>
                    </p>
                    <p className="sp-description">{pkg.description}</p>
                    <ul className="sl-list sp-features">
                      {pkg.features.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                    <button
                      type="button"
                      className={`btn ${i === 1 ? 'btn-primary' : 'btn-ink'} sp-cta`}
                      onClick={() => setModalPackage(pkg.name.replace(/\n/g, ' '))}
                    >
                      {pricing.requestQuote}
                    </button>
                  </div>
                );
              })}
            </div>
            <p className="sp-footnote">{pricing.footnote}</p>
          </section>
        )}

        <section className="sl-section container" aria-labelledby="feature-more">
          <h2 id="feature-more" className="sl-section-title">{labels.more}</h2>
          <ul className="sl-links">
            {otherTopics.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span>{item.title}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <ContactBlock
          title={page.cta.title}
          description={page.cta.description}
          source={`webdev-${featureSlug}`}
        />
      </article>
    </>
  );
}

export default WebdevFeaturePage;
