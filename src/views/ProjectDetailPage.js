'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { getProjectByKey } from '../data/projects';

function Showcase({ project, title }) {
  const [active, setActive] = useState(0);
  const hasImages = project.gallery.length > 0;
  const activeImg = hasImages ? project.gallery[active] : null;

  const media = project.video ? (
    <video
      className="project-showcase-media"
      src={project.video}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  ) : activeImg ? (
    <Image
      className="project-showcase-media"
      src={activeImg}
      alt={title}
      sizes="(max-width: 900px) 90vw, 520px"
      priority
    />
  ) : null;

  const frameClass = `project-showcase project-showcase--${project.display}${
    project.mono ? ' is-mono' : ''
  }`;

  return (
    <div className="project-showcase-wrap">
      <div className={frameClass}>
        {project.display === 'browser' && (
          <div className="project-showcase-chrome">
            <span /><span /><span />
          </div>
        )}
        <div className="project-showcase-screen">{media}</div>
      </div>

      {project.gallery.length > 1 && (
        <div className="project-showcase-thumbs" role="tablist" aria-label={title}>
          {project.gallery.map((img, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`project-showcase-thumb${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              <Image src={img} alt={`${title} ${i + 1}`} sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectDetailPage({ projectKey }) {
  const { t } = useTranslation('projects');
  const project = getProjectByKey(projectKey);
  if (!project) return null;

  const l = (key) => t(`detail.labels.${key}`);
  const d = (key) => t(`detail.items.${projectKey}.${key}`);

  const title = t(`cards.${projectKey}.title`);
  const description = t(`cards.${projectKey}.description`);
  const allTags = t(`cards.${projectKey}.tags`, { returnObjects: true });
  const wipLabels = ['U izradi', 'In development'];
  const tags = Array.isArray(allTags) ? allTags.filter((tag) => !wipLabels.includes(tag)) : [];
  const isWip = Array.isArray(allTags) && allTags.some((tag) => wipLabels.includes(tag));

  const sections = ['challenge', 'solution', 'outcome'];

  return (
    <article className="project-detail">
      <div className="container">
        <header className="project-detail-head">
          <nav aria-label="breadcrumb" className="breadcrumb project-detail-breadcrumb">
            <ol>
              <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
              <li><Link href="/projekti">{t('section.title')}</Link></li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>

          <h1 className="project-detail-title">
            {title}
            {isWip && (
              <span className="project-wip-badge">
                <span className="project-wip-dot" aria-hidden="true" />
                {wipLabels[0]}
              </span>
            )}
          </h1>
          <p className="project-detail-lead">{description}</p>
        </header>

        <div className="project-detail-body">
          <div className="project-detail-timeline">
            {sections.map((s) => (
              <section key={s} className="project-detail-step">
                <h2 className="project-detail-step-title">{l(s)}</h2>
                <p className="project-detail-step-text">{d(s)}</p>
              </section>
            ))}
          </div>

          <aside className="project-detail-aside">
            <Showcase project={project} title={title} />

            <div className="project-detail-tech">
              <h2 className="project-detail-tech-title">{l('tech')}</h2>
              <div className="project-tags">
                {tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              {project.logo && (
                <div className="project-detail-client">
                  <Image src={project.logo} alt="" />
                </div>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary project-detail-visit"
                >
                  {l('visit')} <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </div>
          </aside>
        </div>

        <section className="project-detail-cta">
          <h2 className="project-detail-cta-title">{l('ctaTitle')}</h2>
          <p className="project-detail-cta-text">{l('ctaDescription')}</p>
          <div className="project-detail-cta-actions">
            <Link href="/#contact" className="btn btn-primary">{l('ctaButton')}</Link>
            <Link href="/projekti" className="btn btn-secondary">{l('back')}</Link>
          </div>
        </section>
      </div>
    </article>
  );
}

export default ProjectDetailPage;
