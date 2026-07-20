'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { getProjectByKey } from '../data/projects';

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
      <header className={`project-detail-cover${project.video ? ' project-detail-cover--video' : ''}`}>
        {project.video && (
          <video
            className="project-detail-cover-video"
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        )}
        <div className="container">
          <nav aria-label="breadcrumb" className="breadcrumb project-detail-breadcrumb">
            <ol>
              <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
              <li><Link href="/projekti">{t('section.title')}</Link></li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>

          <span className="project-detail-eyebrow">{t(`categories.${project.category}`)}</span>
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

          <div className="project-detail-cover-actions">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {l('visit')} <span aria-hidden="true">&rarr;</span>
              </a>
            )}
            {project.logo && (
              <span className="project-detail-client-logo">
                <Image src={project.logo} alt="" />
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="container">
        <div className="project-detail-body">
          <div className="project-detail-sections">
            {sections.map((s) => (
              <section key={s} className="project-detail-section">
                <h2 className="project-detail-section-title">{l(s)}</h2>
                <p className="project-detail-section-text">{d(s)}</p>
              </section>
            ))}
          </div>

          <aside className="project-detail-tech">
            <h2 className="project-detail-section-title">{l('tech')}</h2>
            <div className="project-tags">
              {tags.map((tag, i) => (
                <span key={i} className="project-tag">{tag}</span>
              ))}
            </div>
          </aside>
        </div>

        {project.gallery.length > 0 && (
          <section className="project-detail-gallery-wrap">
            <h2 className="project-detail-section-title">{l('gallery')}</h2>
            <div
              className={
                'project-detail-gallery' +
                (project.tall ? ' project-detail-gallery--tall' : '') +
                (project.mono ? ' project-detail-gallery--mono' : '') +
                (project.gallery.length > 1 ? ' project-detail-gallery--grid' : '')
              }
            >
              {project.gallery.map((img, i) => (
                <figure key={i} className="project-detail-shot">
                  <Image src={img} alt={`${title} ${i + 1}`} sizes="(max-width: 768px) 100vw, 800px" />
                </figure>
              ))}
            </div>
          </section>
        )}

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
