import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import flexportalImg from '../assets/flexportal.png';
import anglerSS0 from '../assets/SS0.jpg';
import anglerSS1 from '../assets/SS1.jpg';
import anglerSS4 from '../assets/SS4.jpg';
import timetableImg from '../assets/timetable-system.svg';
import sensorNetworkImg from '../assets/sensor-network.svg';
import bonfonImg from '../assets/bonfon.png';
import smarthomeImg from '../assets/smarthome.png';
import apartmaniImg from '../assets/apartmani-bunicic-full.png';
import houseLucyImg from '../assets/house-lucy-razanac-full.png';
import atronLogo from '../assets/atron.svg';
import sympowerLogo from '../assets/sympower.svg';

const categories = ['featured', 'web', 'software', 'mobile'];

const projectCategories = {
  apartmani: ['featured', 'web'],
  houselucy: ['featured', 'web'],
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

  const projectKeys = ['apartmani', 'houselucy', 'flexportal', 'timetable', 'angler', 'bonfon', 'thesis', 'smarthome'];

  const filteredProjects = activeCategory === 'all'
    ? projectKeys
    : projectKeys.filter(key => projectCategories[key]?.includes(activeCategory));

  const projectImages = {
    apartmani: apartmaniImg,
    houselucy: houseLucyImg,
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
  };

  const clientLogos = {
    flexportal: sympowerLogo,
    timetable: atronLogo,
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t('section.title')}</h2>
        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`projects-filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {t(`categories.${category}`)}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((key) => (
            <ProjectCard
              key={key}
              projectKey={key}
              projectImage={projectImages[key]}
              clientLogo={clientLogos[key]}
              scrollablePreview={scrollablePreview[key]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
