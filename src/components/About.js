'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// Uses the same building blocks as the service pages (sl-*) so the whole site
// reads as one system. Copy lives in about.json.
function About() {
  const { t } = useTranslation(['about', 'common']);
  const get = (key) => t(key, { ns: 'about', returnObjects: true });
  const pad = (i) => String(i + 1).padStart(2, '0');

  const title = t('section.title', { ns: 'about' });
  const statement = get('statement');
  const facts = get('facts');
  const principles = get('principles');
  const process = get('process');
  const cta = get('cta');

  return (
    <article id="about" className="sl sl--about">
      <header className="sl-hero container">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        <h1 className="sl-title">{title}</h1>
        <p className="sl-lead">{t('lead', { ns: 'about' })}</p>
      </header>

      <section className="sl-section container" aria-labelledby="about-who">
        <h2 id="about-who" className="sl-section-title">{statement.title}</h2>
        <div>
          <p className="sl-statement">{statement.text}</p>
          <p className="sl-statement-more">{statement.more}</p>
          <ul className="about-facts">
            {facts.map((fact) => (
              <li key={fact.value}>
                <span className="about-fact-value">{fact.value}</span>
                <span className="about-fact-label">{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sl-section container" aria-labelledby="about-principles">
        <h2 id="about-principles" className="sl-section-title">{principles.title}</h2>
        <ol className="about-principles">
          {principles.items.map((item, i) => (
            <li key={item.title}>
              <span className="sl-index">{pad(i)}</span>
              <h3 className="about-principle-title">{item.title}</h3>
              <p className="about-principle-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sl-process" aria-labelledby="about-process">
        <div className="container">
          <h2 id="about-process" className="sl-section-title">{process.title}</h2>
          <ol className="sl-steps">
            {process.steps.map((step, i) => (
              <li key={step.title} className="sl-step">
                <span className="sl-step-number">{pad(i)}</span>
                <h3 className="sl-step-title">{step.title}</h3>
                <p className="sl-step-text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sl-cta container">
        <div className="sl-cta-inner">
          <div className="sl-cta-text">
            <h2 className="sl-cta-title">{cta.title}</h2>
            <p className="sl-cta-description">{cta.description}</p>
          </div>
          <div className="sl-cta-actions">
            <Link href="/usluge" className="btn btn-secondary">{cta.services}</Link>
            <Link href="/#contact" className="btn btn-primary">{cta.button}</Link>
          </div>
        </div>
      </section>
    </article>
  );
}

export default About;
