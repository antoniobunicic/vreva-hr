'use client';
import React, { useState, useRef, useEffect } from 'react';
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
import atronLogo from '../assets/projects/atron/atron.svg';
import sympowerLogo from '../assets/projects/flexportal/sympower.svg';

const categories = ['featured', 'web', 'software', 'mobile'];

const projectCategories = {
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

function Projects() {
  const { t } = useTranslation('projects');
  const [activeCategory, setActiveCategory] = useState('featured');
  const filterRef = useRef(null);
  const indicatorRef = useRef(null);

  const moveIndicator = (btn) => {
    const container = filterRef.current;
    const indicator = indicatorRef.current;
    if (!container || !indicator || !btn) return;
    indicator.style.width = `${btn.offsetWidth}px`;
    indicator.style.transform = `translateX(${btn.offsetLeft}px)`;
  };

  useEffect(() => {
    const container = filterRef.current;
    if (!container) return;
    const activeBtn = container.querySelector('.projects-filter-pill.active');
    if (activeBtn) moveIndicator(activeBtn);
  }, []);

  const projectKeys = ['apartmani', 'houselucy', 'otooles', 'flexportal', 'timetable', 'angler', 'bonfon', 'thesis', 'smarthome'];

  const filteredProjects = activeCategory === 'all'
    ? projectKeys
    : projectKeys.filter(key => projectCategories[key]?.includes(activeCategory));

  const projectImages = {
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

  const scrollablePreview = {
    apartmani: true,
    houselucy: true,
    otooles: true,
  };

  const clientLogos = {
    flexportal: sympowerLogo,
    timetable: atronLogo,
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t('section.title')}</h2>
        <div className="projects-filter" ref={filterRef}>
          <div className="projects-filter-indicator" ref={indicatorRef} />
          {categories.map((category) => (
            <button
              key={category}
              className={`projects-filter-pill ${activeCategory === category ? 'active' : ''}`}
              onClick={(e) => { moveIndicator(e.currentTarget); setActiveCategory(category); }}
            >
              {t(`categories.${category}`)}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {projectKeys.map((key) => (
            <div
              key={key}
              className={`project-wrapper${filteredProjects.includes(key) ? '' : ' hidden'}`}
            >
              <ProjectCard
                projectKey={key}
                projectImage={projectImages[key]}
                clientLogo={clientLogos[key]}
                scrollablePreview={scrollablePreview[key]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
