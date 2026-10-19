'use client';
import React, { useState, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import flexportalImg from '../assets/projects/flexportal/flexportal.png';
import anglerSS0 from '../assets/projects/angler/SS0.jpg';
import anglerSS1 from '../assets/projects/angler/SS1.jpg';
import anglerSS4 from '../assets/projects/angler/SS4.jpg';
import timetableImg from '../assets/projects/atron/timetable-system.svg';
import sensorNetworkImg from '../assets/projects/iot/sensor-network.svg';
import bonfonImg from '../assets/projects/bonfon/bonfon.png';
import smarthomeImg from '../assets/projects/iot/smarthome.png';
import apartmaniImg from '../assets/projects/accommodation/apartmani-bunicic-full.png';
import houseLucyImg from '../assets/projects/accommodation/house-lucy-razanac-full.png';
import otoolesImg from '../assets/projects/accommodation/otooles-full.png';
import chicoffeeImg from '../assets/projects/chicoffee/chicoffee.png';
import atronLogo from '../assets/projects/atron/atron.svg';
import sympowerLogo from '../assets/projects/flexportal/sympower.svg';

const categories = ['featured', 'web', 'software', 'mobile'];

const projectCategories = {
  patrickboy: ['featured', 'web'],
  chicoffee: ['featured', 'web'],
  vilaistra: ['featured', 'web'],
  apartmani: ['featured', 'web'],
  houselucy: ['featured', 'web'],
  otooles: ['featured', 'web'],
  flexportal: ['featured', 'web', 'software'],
  timetable: ['featured', 'software'],
  angler: ['featured', 'mobile'],
  bonfon: ['mobile'],
  thesis: ['software'],
  smarthome: ['mobile', 'software'],
};

// Software and app projects show illustrations / transparent compositions
// rather than website screenshots — they sit on the page without a frame.
const illustrationProjects = new Set(['flexportal', 'timetable', 'angler', 'bonfon', 'thesis', 'smarthome']);

const patrickBoyVideo = '/projects/patrick-boy-transferi/hero-patrick-boy.mp4';
const vilaIstraVideo = '/projects/vila-istra/hero-vila-istra.mp4';

function Projects() {
  const { t } = useTranslation(['projects', 'common']);
  const [activeCategory, setActiveCategory] = useState('featured');
  const filterRef = useRef(null);
  const indicatorRef = useRef(null);

  // Slide the lime bar under the active tab; re-measure on resize.
  useLayoutEffect(() => {
    const place = () => {
      const active = filterRef.current?.querySelector('.pl-filter-tab.active');
      const bar = indicatorRef.current;
      if (!active || !bar) return;
      bar.style.width = `${active.offsetWidth}px`;
      bar.style.transform = `translateX(${active.offsetLeft}px)`;
    };
    place();
    document.fonts?.ready.then(place);
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [activeCategory]);

  const projectKeys = ['chicoffee', 'vilaistra', 'patrickboy', 'apartmani', 'houselucy', 'otooles', 'flexportal', 'timetable', 'angler', 'bonfon', 'thesis', 'smarthome'];

  const inCategory = (category) => projectKeys.filter((key) => projectCategories[key]?.includes(category));
  const filteredProjects = inCategory(activeCategory);

  const projectImages = {
    chicoffee: chicoffeeImg,
    apartmani: apartmaniImg,
    houselucy: houseLucyImg,
    otooles: otoolesImg,
    flexportal: flexportalImg,
    timetable: timetableImg,
    angler: [anglerSS0, anglerSS1, anglerSS4],
    bonfon: bonfonImg,
    thesis: sensorNetworkImg,
    smarthome: smarthomeImg
  };

  const clientLogos = {
    flexportal: sympowerLogo,
    timetable: atronLogo,
  };

  return (
    <article id="projects" className="sl sl--projects">
      <header className="sl-hero container">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li aria-current="page">{t('section.title')}</li>
          </ol>
        </nav>
        <h1 className="sl-title">{t('section.title')}</h1>
        <p className="sl-lead">{t('section.lead')}</p>
      </header>

      <section className="container pl-section">
        <div className="pl-filter" role="tablist" aria-label={t('section.title')} ref={filterRef}>
          <span className="pl-filter-indicator" ref={indicatorRef} aria-hidden="true" />
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`pl-filter-tab${activeCategory === category ? ' active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {t(`categories.${category}`)}
              <span className="pl-filter-count">{inCategory(category).length}</span>
            </button>
          ))}
        </div>

        <div className="pl-grid">
          {projectKeys.map((key) => (
            <div
              key={key}
              className={`project-wrapper${illustrationProjects.has(key) ? ' project-wrapper--illustration' : ''}${filteredProjects.includes(key) ? '' : ' hidden'}`}
            >
              <ProjectCard
                projectKey={key}
                projectImage={projectImages[key]}
                projectVideo={key === 'patrickboy' ? patrickBoyVideo : key === 'vilaistra' ? vilaIstraVideo : undefined}
                clientLogo={clientLogos[key]}
              />
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default Projects;
