'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
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

function FeaturedProjects() {
  const { t } = useTranslation('projects');
  const [active, setActive] = useState(0);
  const wrapperRef = useRef(null);
  const accommodationRef = useRef(null);

  const scrollAccommodation = (dir) => {
    const el = accommodationRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild;
    const step = firstCard ? firstCard.offsetWidth + 20 : window.innerWidth * 0.5;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const totalScroll = wrapper.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / totalScroll));
      const idx = Math.min(sections.length - 1, Math.floor(progress * sections.length));
      setActive(idx);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="projects" className="featured-projects">
      <div className="container">
        <h2 className="section-title">{t('featured.title')}</h2>
      </div>

      <div
        ref={wrapperRef}
        className="featured-subsections-wrapper"
        style={{ height: `${sections.length * 100}vh` }}
      >
        <div className="featured-subsections-sticky">
          <div className="featured-subsections">
            <div className="featured-subsections-header">
              <div className="featured-subsections-dots">
                {sections.map((s, i) => (
                  <button
                    key={s.key}
                    type="button"
                    className={`featured-subsections-dot${active === i ? ' active' : ''}`}
                    onClick={() => {
                      const wrapper = wrapperRef.current;
                      if (!wrapper) return;
                      const rect = wrapper.getBoundingClientRect();
                      const wrapperTop = rect.top + window.scrollY;
                      const totalScroll = wrapper.offsetHeight - window.innerHeight;
                      const target = wrapperTop + (totalScroll * i) / sections.length;
                      window.scrollTo({ top: target, behavior: 'smooth' });
                    }}
                    aria-label={`Section ${i + 1}`}
                  />
                ))}
              </div>
              <div className="featured-subsections-text">
                {sections.map((section, i) => (
                  <div
                    key={section.key}
                    className={`featured-subsection-pane${active === i ? ' active' : ''}`}
                    aria-hidden={active !== i}
                  >
                    <h3 className="featured-subsection-title">
                      {t(`featured.${section.key}.title`)}
                    </h3>
                    <p className="featured-subsection-description">
                      {t(`featured.${section.key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="featured-subsections-visuals">
              {sections.map((section, i) => (
                <div
                  key={section.key}
                  className={`featured-subsection-visual-pane featured-subsection-visual-pane--${section.key}${active === i ? ' active' : ''}`}
                  aria-hidden={active !== i}
                >
                  {section.key === 'accommodation' && (
                    <div className="accommodation-nav">
                      <button
                        type="button"
                        className="accommodation-nav-btn"
                        onClick={() => scrollAccommodation(-1)}
                        aria-label="Prethodni projekt"
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="accommodation-nav-btn"
                        onClick={() => scrollAccommodation(1)}
                        aria-label="Sljedeći projekt"
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  )}
                  <div
                    className="featured-subsection-grid"
                    data-count={section.projects.length}
                    ref={section.key === 'accommodation' ? accommodationRef : null}
                  >
                    {section.projects.map((key) => (
                      <ProjectCard
                        key={key}
                        projectKey={key}
                        projectImage={projectImages[key]}
                        projectVideo={projectVideos[key]}
                        clientLogo={clientLogos[key]}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="featured-cta">
          <Link href="/projekti" className="featured-cta-link">
            {t('featured.viewAll')} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
