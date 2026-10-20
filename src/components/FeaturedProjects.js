'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ProjectCard, { COMPACT_CARD_SIZES } from './ProjectCard';
import apartmaniImg from '../assets/projects/accommodation/apartmani-bunicic-full.png';
import houseLucyImg from '../assets/projects/accommodation/house-lucy-razanac-full.png';
import otoolesImg from '../assets/projects/accommodation/otooles-full.png';
import flexportalImg from '../assets/projects/flexportal/flexportal.png';
import sympowerLogo from '../assets/projects/flexportal/sympower.svg';
import timetableImg from '../assets/projects/atron/timetable-system.svg';
import atronLogo from '../assets/projects/atron/atron.svg';
import bonfonImg from '../assets/projects/bonfon/bonfon.png';
import anglerSS0 from '../assets/projects/angler/SS0.jpg';
import anglerSS1 from '../assets/projects/angler/SS1.jpg';
import anglerSS4 from '../assets/projects/angler/SS4.jpg';
import chicoffeeImg from '../assets/projects/chicoffee/chicoffee.png';

const patrickBoyVideo = '/projects/patrick-boy-transferi/hero-patrick-boy.mp4';
const vilaIstraVideo = '/projects/vila-istra/hero-vila-istra.mp4';

const projectImages = {
  chicoffee: chicoffeeImg,
  apartmani: apartmaniImg,
  houselucy: houseLucyImg,
  otooles: otoolesImg,
  flexportal: flexportalImg,
  timetable: timetableImg,
  angler: [anglerSS0, anglerSS1, anglerSS4],
  bonfon: bonfonImg,
};

const projectVideos = {
  patrickboy: patrickBoyVideo,
  vilaistra: vilaIstraVideo,
};

const clientLogos = {
  flexportal: sympowerLogo,
  timetable: atronLogo,
};

const sections = [
  { key: 'accommodation', projects: ['vilaistra', 'apartmani', 'houselucy', 'otooles'] },
  { key: 'taxi', projects: ['chicoffee', 'patrickboy'] },
  { key: 'software', projects: ['flexportal', 'timetable'] },
  { key: 'mobile', projects: ['bonfon', 'angler'] },
];

// Software and app projects use illustrations / transparent compositions —
// they sit on the page without a frame (same rule as /projekti).
const illustrationProjects = new Set(['flexportal', 'timetable', 'angler', 'bonfon']);

// Editorial sticky layout: the left column (counter, category, description)
// stays pinned while the projects scroll normally on the right. The active
// category follows whichever group is crossing the middle of the viewport.
// Below 1024px the sticky column is hidden and each group shows its own header.
function FeaturedProjects() {
  const { t } = useTranslation('projects');
  const [active, setActive] = useState(0);
  const groupRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    groupRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (i) => groupRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section id="projects" className="featured-projects">
      <div className="container">
        <h2 className="section-title">{t('featured.title')}</h2>

        <div className="fp">
          <aside className="fp-aside" aria-hidden="true">
            <div className="fp-sticky">
              <p className="fp-counter">
                <span className="fp-counter-current">{pad(active + 1)}</span>
                <span className="fp-counter-total">/ {pad(sections.length)}</span>
              </p>
              <div className="fp-bars">
                {sections.map((s, i) => (
                  <button
                    key={s.key}
                    type="button"
                    tabIndex={-1}
                    className={`fp-bar${active === i ? ' active' : ''}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
              <div className="fp-panes">
                {sections.map((s, i) => (
                  <div key={s.key} className={`fp-pane${active === i ? ' active' : ''}`}>
                    <h3 className="fp-title">{t(`featured.${s.key}.title`)}</h3>
                    <p className="fp-description">{t(`featured.${s.key}.description`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="fp-groups">
            {sections.map((section, i) => (
              <div
                key={section.key}
                ref={(el) => { groupRefs.current[i] = el; }}
                data-index={i}
                className="fp-group"
              >
                <header className="fp-group-head">
                  <span className="fp-group-index">{pad(i + 1)}</span>
                  <h3 className="fp-title">{t(`featured.${section.key}.title`)}</h3>
                  <p className="fp-description">{t(`featured.${section.key}.description`)}</p>
                </header>
                <div className="pl-grid fp-grid">
                  {section.projects.map((key) => (
                    <div
                      key={key}
                      className={`project-wrapper${illustrationProjects.has(key) ? ' project-wrapper--illustration' : ''}`}
                    >
                      <ProjectCard
                        projectKey={key}
                        projectImage={projectImages[key]}
                        projectVideo={projectVideos[key]}
                        clientLogo={clientLogos[key]}
                        imageSizes={COMPACT_CARD_SIZES}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="featured-cta">
              <Link href="/projekti" className="featured-cta-link">
                {t('featured.viewAll')} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
