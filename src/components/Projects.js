import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import flexportalImg from '../assets/flexportal.png';
import anglerSS0 from '../assets/SS0.jpg';
import anglerSS1 from '../assets/SS1.jpg';
import anglerSS4 from '../assets/SS4.jpg';
import timetableImg from '../assets/timetable-system.svg';
import sensorNetworkImg from '../assets/sensor-network.svg';
import atronLogo from '../assets/atron.svg';
import sympowerLogo from '../assets/sympower.svg';

function Projects() {
  const { t } = useTranslation('projects');

  const projectKeys = ['flexportal', 'timetable', 'angler', 'bonfon', 'thesis', 'smarthome'];

  const projectImages = {
    flexportal: flexportalImg,
    timetable: timetableImg,
    angler: [anglerSS0, anglerSS1, anglerSS4],
    thesis: sensorNetworkImg
  };

  const clientLogos = {
    flexportal: sympowerLogo,
    timetable: atronLogo,
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t('section.title')}</h2>
        <div className="projects-grid">
          {projectKeys.map((key) => (
            <ProjectCard
              key={key}
              projectKey={key}
              projectImage={projectImages[key]}
              clientLogo={clientLogos[key]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
