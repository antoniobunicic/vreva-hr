'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { projects, getProjectByKey } from '../data/projects';
import LazyVideo from '../components/LazyVideo';

// Large project visual: the video, or the first gallery image, in the same
// framed 16:10 box as the /projekti cards. Illustrations and app shots sit
// unframed and are fitted rather than cropped.
function Showcase({ project, title }) {
  const first = project.gallery[0];
  const isIllustration = project.display !== 'browser';

  const media = project.video ? (
    <LazyVideo src={project.video} aria-hidden="true" />
  ) : first ? (
    <Image src={first} alt={title} sizes="(max-width: 1024px) 100vw, 1300px" priority />
  ) : null;

  if (!media) return null;

  return (
    <section className="container pd-showcase-section" aria-label={title}>
      <div className={`pd-showcase${isIllustration ? ' pd-showcase--illustration' : ''}${project.mono ? ' is-mono' : ''}`}>
        {media}
      </div>
    </section>
  );
}

// Every other image, shown whole at its own aspect ratio. Portrait shots
// (app screens) line up three or four across; landscape shots (websites)
// sit two across. Adding images to a project's gallery is all it takes.
function Gallery({ project, title, label, includeFirst }) {
  const images = project.video || includeFirst ? project.gallery : project.gallery.slice(1);
  if (images.length === 0) return null;

  const allPortrait = images.every((img) => img.height > img.width);
  const framed = project.display === 'browser';

  return (
    <section className="container pd-gallery-section" aria-label={label}>
      <div
        className={`pd-gallery${allPortrait ? ' pd-gallery--portrait' : ''}${framed ? ' pd-gallery--framed' : ''}`}
        style={allPortrait ? { '--pd-cols': Math.min(images.length, 4) } : undefined}
      >
        {images.map((img, i) => (
          <figure key={i} className="pd-gallery-item">
            <Image
              src={img}
              alt={`${title} ${i + 1}`}
              sizes={allPortrait ? '(max-width: 768px) 50vw, 25vw' : '(max-width: 768px) 100vw, 50vw'}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

// Small preview of the next project: its video or first image, framed like
// the cards for websites, unframed and fitted for illustrations / app shots.
function NextThumb({ project }) {
  const first = project.gallery[0];
  if (!project.video && !first) return <span className="pd-next-thumb pd-next-thumb--empty" aria-hidden="true" />;
  const illustration = project.display !== 'browser';

  return (
    <span
      className={`pd-next-thumb${illustration ? ' pd-next-thumb--illustration' : ''}${project.mono ? ' is-mono' : ''}`}
      aria-hidden="true"
    >
      {project.video ? (
        <LazyVideo src={project.video} />
      ) : (
        <Image src={first} alt="" sizes="200px" />
      )}
    </span>
  );
}

function ProjectDetailPage({ projectKey }) {
  const { t } = useTranslation(['projects', 'common']);
  const project = getProjectByKey(projectKey);
  if (!project) return null;

  const l = (key) => t(`detail.labels.${key}`);
  const d = (key) => t(`detail.items.${projectKey}.${key}`);

  const title = t(`cards.${projectKey}.title`);
  const description = t(`cards.${projectKey}.description`);
  const allTags = t(`cards.${projectKey}.tags`, { returnObjects: true });
  const wipLabels = ['U izradi', 'In development'];
  const tags = Array.isArray(allTags) ? allTags.filter((tag) => !wipLabels.includes(tag)) : [];
  const wipTag = Array.isArray(allTags) ? allTags.find((tag) => wipLabels.includes(tag)) : null;

  // A set of portrait app screens reads best side by side, so skip the big
  // single visual and show them all in the gallery row.
  const portraitSet = !project.video && project.gallery.length > 1
    && project.gallery.every((img) => img.height > img.width);

  // Next project in /projekti order, wrapping around at the end
  const index = projects.findIndex((p) => p.key === projectKey);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="sl sl--project">
      <header className="sl-hero container pd-hero">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li><Link href="/projekti">{t('section.title')}</Link></li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        {wipTag && (
          <p className="pd-meta">
            <span className="pd-wip">{wipTag}</span>
          </p>
        )}
        <h1 className="sl-title sl-title--long">{title}</h1>
        <p className="sl-lead sl-lead--long">{description}</p>

        {/* Key facts at a glance: client (logo), type of work, technologies */}
        <dl className={`pd-facts${project.logo ? '' : ' pd-facts--no-client'}`}>
          {project.logo && (
            <div className="pd-fact">
              <dt>{l('client')}</dt>
              <dd className="pd-fact-client">
                <Image src={project.logo} alt="" />
              </dd>
            </div>
          )}
          <div className="pd-fact">
            <dt>{l('type')}</dt>
            <dd>{t(`categories.${project.category}`)}</dd>
          </div>
          {tags.length > 0 && (
            <div className="pd-fact">
              <dt>{l('tech')}</dt>
              <dd>{tags.join(' · ')}</dd>
            </div>
          )}
        </dl>
        {project.liveUrl && (
          <div className="sl-hero-actions">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ink">
              {l('visit')} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        )}
      </header>

      {!portraitSet && <Showcase project={project} title={title} />}
      <Gallery project={project} title={title} label={l('gallery')} includeFirst={portraitSet} />

      {['challenge', 'solution', 'outcome'].map((key) => (
        <section key={key} className="sl-section container">
          <h2 className="sl-section-title">{l(key)}</h2>
          <p className="sl-body pd-body">{d(key)}</p>
        </section>
      ))}

      {next && next.key !== projectKey && (
        <section className="container pd-next-section">
          <Link href={`/projekti/${next.slug}/`} className="pd-next">
            <span className="pd-next-label">{l('next')}</span>
            <NextThumb project={next} />
            <span className="pd-next-title">{t(`cards.${next.key}.title`)}</span>
            <span className="pd-next-arrow" aria-hidden="true">&rarr;</span>
          </Link>
        </section>
      )}

      <section className="sl-cta container">
        <div className="sl-cta-inner">
          <div className="sl-cta-text">
            <h2 className="sl-cta-title">{l('ctaTitle')}</h2>
            <p className="sl-cta-description">{l('ctaDescription')}</p>
          </div>
          <div className="sl-cta-actions">
            <Link href="/projekti" className="btn btn-secondary">{l('back')}</Link>
            <Link href="/#contact" className="btn btn-primary">{l('ctaButton')}</Link>
          </div>
        </div>
      </section>
    </article>
  );
}

export default ProjectDetailPage;
