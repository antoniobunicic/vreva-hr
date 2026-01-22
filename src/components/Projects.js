import React from 'react';
import { useTranslation } from 'react-i18next';
import flexportalImg from '../assets/flexportal.png';
import anglerImg from '../assets/angler.png';

function Projects() {
  const { t } = useTranslation('projects');

  const projectKeys = ['flexportal', 'timetable', 'angler', 'bonfon', 'thesis', 'smarthome'];

  const projectImages = {
    flexportal: flexportalImg,
    angler: anglerImg
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t('section.title')}</h2>
        <div className="projects-grid">
          {projectKeys.map((key) => (
            <div key={key} className={`project-card ${!projectImages[key] ? 'no-image' : ''}`}>
              {projectImages[key] && (
                <div className="project-image">
                  <img src={projectImages[key]} alt={t(`cards.${key}.title`)} />
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title">{t(`cards.${key}.title`)}</h3>
                <p className="project-description">{t(`cards.${key}.description`)}</p>
                {t(`cards.${key}.tags`, { returnObjects: true }).length > 0 && (
                  <div className="project-tags">
                    {t(`cards.${key}.tags`, { returnObjects: true }).map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
