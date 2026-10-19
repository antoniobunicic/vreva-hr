'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// Airy, scannable layout shared by every core service page:
// hero with one-line lead → what we offer → (why us) → how we work → (pricing)
// → (industries) → (tools) → CTA. Blocks in brackets render only when the
// service's copy has them. Copy lives in services.json under detail.<serviceKey>.
function ServiceLandingPage({ serviceKey }) {
  const { t } = useTranslation(['services', 'common']);
  const d = t(`detail.${serviceKey}`, { ns: 'services', returnObjects: true });
  const pad = (i) => String(i + 1).padStart(2, '0');

  return (
    <article className={`sl sl--${serviceKey}`}>
      <header className="sl-hero container">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li><Link href="/usluge">{t('nav.services', { ns: 'common' })}</Link></li>
            <li aria-current="page">{d.hero}</li>
          </ol>
        </nav>
        <h1 className="sl-title">{d.hero}</h1>
        <p className="sl-lead">{d.lead}</p>
        <div className="sl-hero-actions">
          <Link href="/#contact" className="btn btn-primary">{d.cta.button}</Link>
          <a href="#kako-radimo" className="btn btn-secondary">{d.process.title} <span aria-hidden="true">&darr;</span></a>
        </div>
      </header>

      <section className="sl-section container" aria-labelledby="sl-offer">
        <h2 id="sl-offer" className="sl-section-title">{d.offer.title}</h2>
        <ol className="sl-offer">
          {d.offer.items.map((item, i) => {
            const body = (
              <>
                <span className="sl-index">{pad(i)}</span>
                <h3 className="sl-offer-title">
                  {item.title}
                  {item.href && <span className="sl-offer-arrow" aria-hidden="true">&rarr;</span>}
                </h3>
                <p className="sl-offer-text">{item.text}</p>
              </>
            );
            return (
              <li key={item.title} className="sl-offer-item">
                {item.href ? <Link href={item.href} className="sl-offer-link">{body}</Link> : body}
              </li>
            );
          })}
        </ol>
      </section>

      {d.statement && (
        <section className="sl-section container" aria-labelledby="sl-statement">
          <h2 id="sl-statement" className="sl-section-title">{d.statement.title}</h2>
          <div>
            <p className="sl-statement">{d.statement.text}</p>
            {d.statement.link && (
              <Link href={d.statement.link.href} className="sl-text-link">
                {d.statement.link.label} <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </section>
      )}

      <section id="kako-radimo" className="sl-process" aria-labelledby="sl-process">
        <div className="container">
          <h2 id="sl-process" className="sl-section-title">{d.process.title}</h2>
          <ol className="sl-steps">
            {d.process.steps.map((step, i) => (
              <li key={step.title} className="sl-step">
                <span className="sl-step-number">{pad(i)}</span>
                <h3 className="sl-step-title">{step.title}</h3>
                <p className="sl-step-text">{step.text}</p>
              </li>
            ))}
          </ol>
          {d.note && <p className="sl-note">{d.note}</p>}
        </div>
      </section>

      {d.pricingBlock && (
        <section className="sl-section container" aria-labelledby="sl-pricing">
          <h2 id="sl-pricing" className="sl-section-title">{d.pricingBlock.title}</h2>
          <div className="sl-pricing">
            <p className="sl-price">
              {d.pricingBlock.from} <span className="sl-price-note">{d.pricingBlock.note}</span>
            </p>
            <p className="sl-pricing-text">{d.pricingBlock.text}</p>
            <Link href={d.pricingBlock.link.href} className="sl-text-link">
              {d.pricingBlock.link.label} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      )}

      {d.niches?.items && (
        <section className="sl-section container" aria-labelledby="sl-industries">
          <h2 id="sl-industries" className="sl-section-title">{d.niches.title}</h2>
          <ul className="sl-links">
            {d.niches.items.map((niche) => (
              <li key={niche.slug}>
                <Link href={`/usluge/izrada-web-stranica/${niche.slug}/`}>
                  <span>{niche.heading}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {d.stack && (
        <section className="sl-section sl-section--stack container" aria-labelledby="sl-stack">
          <h2 id="sl-stack" className="sl-section-title">{d.stack.title}</h2>
          <ul className="sl-stack">
            {d.stack.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="sl-cta container">
        <div className="sl-cta-inner">
          <div className="sl-cta-text">
            <h2 className="sl-cta-title">{d.cta.title}</h2>
            <p className="sl-cta-description">{d.cta.description}</p>
          </div>
          <Link href="/#contact" className="btn btn-primary sl-cta-button">{d.cta.button}</Link>
        </div>
      </section>
    </article>
  );
}

export default ServiceLandingPage;
