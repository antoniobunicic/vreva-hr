'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import apartmaniImg from '../assets/projects/accommodation/apartmani-bunicic-full.png';
import houseLucyImg from '../assets/projects/accommodation/house-lucy-razanac-full.png';
import otoolesImg from '../assets/projects/accommodation/otooles-full.png';

const nicheProjectKeys = {
  apartmani: ['apartmani', 'houselucy', 'otooles'],
  prijevoz: ['patrickboy'],
};

const projectImages = {
  apartmani: apartmaniImg,
  houselucy: houseLucyImg,
  otooles: otoolesImg,
};

const projectVideos = {
  patrickboy: '/projects/patrick-boy-transferi/hero-patrick-boy.mp4',
};

// Related projects on an industry page, in the same card style as /projekti.
function NicheProjects({ niche, title }) {
  const keys = nicheProjectKeys[niche];
  if (!keys || keys.length === 0) return null;

  return (
    <section className="sl-section container" aria-label={title}>
      <h2 className="sl-section-title">{title}</h2>
      <div className="pl-grid">
        {keys.map((key) => (
          <div key={key} className="project-wrapper">
            <ProjectCard
              projectKey={key}
              projectImage={projectImages[key]}
              projectVideo={projectVideos[key]}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default NicheProjects;
