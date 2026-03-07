import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const validSlugs = ['ugostiteljstvo', 'apartmani', 'obrtnici', 'male-tvrtke', 'turizam', 'saloni'];

function NicheDetailPage() {
  const { niche } = useParams();
  const { t } = useTranslation('services');

  if (!validSlugs.includes(niche)) {
    return <Navigate to="/services/web-development" replace />;
  }

  const page = t(`detail.webdev.niches.pages.${niche}`, { returnObjects: true });

  return (
    <section className="service-page service-page--webdev">
      <div className="container">
        <div className="service-page-header">
          <p className="niche-breadcrumb">
            <Link to="/services/web-development">{t('detail.webdev.hero')}</Link>
            {' / '}
            {page.hero}
          </p>
          <h1 className="service-page-title">{page.hero}</h1>
          <p className="service-page-subtitle">{page.subtitle}</p>
        </div>

        <div className="service-detail-content">
          <p className="service-detail-intro">{page.intro}</p>

          <ul className="niche-bullets">
            {page.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>

          <div className="service-cta">
            <h2 className="service-cta-title">{page.cta.title}</h2>
            <p className="service-cta-description">{page.cta.description}</p>
            <Link to="/#contact" className="btn btn-primary">
              {page.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NicheDetailPage;
