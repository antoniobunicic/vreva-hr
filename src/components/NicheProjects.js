'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import apartmaniImg from '../assets/projects/accommodation/apartmani-bunicic-full.png';
import houseLucyImg from '../assets/projects/accommodation/house-lucy-razanac-full.png';
import otoolesImg from '../assets/projects/accommodation/otooles-full.png';

const nicheProjectKeys = {
  apartmani: ['apartmani', 'houselucy', 'otooles'],
};

const projectImages = {
  apartmani: apartmaniImg,
  houselucy: houseLucyImg,
  otooles: otoolesImg,
};

const scrollablePreview = {
  apartmani: true,
  houselucy: true,
  otooles: true,
};

function NicheProjects({ niche }) {
  const { t } = useTranslation('projects');
  const keys = nicheProjectKeys[niche];

  if (!keys || keys.length === 0) return null;

  return (
    <div className="niche-projects">
      <h2 className="niche-projects-title">{t('nicheSection.title')}</h2>
      <div className="niche-projects-grid">
        {keys.map((key) => (
          <ProjectCard
            key={key}
            projectKey={key}
            projectImage={projectImages[key]}
            scrollablePreview={scrollablePreview[key]}
          />
        ))}
      </div>
    </div>
  );
}

export default NicheProjects;
