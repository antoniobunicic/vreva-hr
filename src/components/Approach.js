import React from 'react';
import { useTranslation } from 'react-i18next';

function Approach() {
  const { t } = useTranslation('approach');

  const principleKeys = ['collaborative', 'detailOriented', 'pragmatic'];
  const processKeys = ['discovery', 'planning', 'development', 'delivery'];

  return (
    <section id="approach" className="approach">
      <div className="container">
        <h2 className="section-title">{t('section.title')}</h2>

        <div className="approach-intro">
          <p>{t('intro')}</p>
        </div>

        <h3 className="subsection-title">{t('principles.title')}</h3>
        <div className="principles-grid">
          {principleKeys.map((key) => (
            <div key={key} className="principle-card">
              <h4 className="principle-title">{t(`principles.items.${key}.title`)}</h4>
              <p className="principle-description">{t(`principles.items.${key}.description`)}</p>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">{t('process.title')}</h3>
        <div className="process-timeline">
          {processKeys.map((key, index) => (
            <div key={key} className="process-step">
              <div className="process-number">{index + 1}</div>
              <div className="process-content">
                <h4 className="process-phase">{t(`process.steps.${key}.phase`)}</h4>
                <p className="process-description">{t(`process.steps.${key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
