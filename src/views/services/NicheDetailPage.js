'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ContactBlock from '../../components/ContactBlock';
import NicheProjects from '../../components/NicheProjects';
import IndustryLabel from '../../components/IndustryLabel';

// Industry landing pages (apartmani, ugostiteljstvo, …): hero → why your own
// site → what's included → related projects → other industries → contact.
function NicheDetailPage({ niche }) {
  const { t } = useTranslation(['services', 'common']);

  const page = t(`detail.webdev.niches.pages.${niche}`, { returnObjects: true });
  const labels = t('detail.webdev.labels', { returnObjects: true });
  const niches = t('detail.webdev.niches', { returnObjects: true });
  const otherNiches = niches.items.filter((item) => item.slug !== niche);

  return (
    <article className="sl sl--niche">
      <header className="sl-hero container">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li><Link href="/usluge">{t('nav.services', { ns: 'common' })}</Link></li>
            <li><Link href="/usluge/izrada-web-stranica">{t('detail.webdev.hero')}</Link></li>
            <li aria-current="page">{page.hero}</li>
          </ol>
        </nav>
        <h1 className="sl-title sl-title--long">{page.hero}</h1>
        {page.subtitle && <p className="sl-lead">{page.subtitle}</p>}
      </header>

      <section className="sl-section container" aria-labelledby="niche-why">
        <h2 id="niche-why" className="sl-section-title">{labels.why}</h2>
        <p className="sl-statement">{page.intro}</p>
      </section>

      <section className="sl-section container" aria-labelledby="niche-features">
        <h2 id="niche-features" className="sl-section-title">{labels.features}</h2>
        <ul className="sl-list sl-list--2col">
          {page.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </section>

      <NicheProjects niche={niche} title={labels.projects} />

      <section className="sl-section container" aria-labelledby="niche-more">
        <h2 id="niche-more" className="sl-section-title">{niches.title}</h2>
        <ul className="sl-links">
          {otherNiches.map((item) => (
            <li key={item.slug}>
              <Link href={`/usluge/izrada-web-stranica/${item.slug}/`}>
                <IndustryLabel heading={item.heading} />
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactBlock
        title={page.cta.title}
        description={page.cta.description}
        source={niche}
        nameLabel={page.formNameLabel}
      />
    </article>
  );
}

export default NicheDetailPage;
