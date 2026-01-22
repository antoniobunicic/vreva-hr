import React from 'react';
import { useTranslation } from 'react-i18next';

function ProjectCard({ projectKey, projectImage, clientLogo }) {
  const { t } = useTranslation('projects');

  const isAngler = projectKey === 'angler';
  const isMultiImage = Array.isArray(projectImage);

  return (
    <div className={`project-card ${!projectImage ? 'no-image' : ''} ${isAngler ? 'angler-multi-image' : ''}`}>
      {projectImage && !isMultiImage && (
        <div className="project-image">
          <img src={projectImage} alt={t(`cards.${projectKey}.title`)} />
        </div>
      )}

      {isMultiImage && (
        <div className="project-image angler-images">
          {projectImage.map((img, index) => (
            <img key={index} src={img} alt={`${t(`cards.${projectKey}.title`)} ${index + 1}`} />
          ))}
        </div>
      )}

      <div className="project-content">
          <h3 className="project-title">{t(`cards.${projectKey}.title`)}</h3>
          {clientLogo && (
          <div className="project-client-logo">
            <img src={clientLogo} alt="Client logo" />
          </div>
        )}
          <p className="project-description">{t(`cards.${projectKey}.description`)}</p>
        {t(`cards.${projectKey}.tags`, { returnObjects: true }).length > 0 && (
          <div className="project-tags">
            {t(`cards.${projectKey}.tags`, { returnObjects: true }).map((tag, index) => (
              <span key={index} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
