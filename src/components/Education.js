import React from 'react';

function Education() {
  const education = [
    {
      degree: 'MSc — Information and Communication Technology',
      institution: 'Faculty of Electrical Engineering and Computing, University of Zagreb',
      period: '2015–2017',
      achievement: "Rector's Award for outstanding scientific work"
    },
    {
      degree: 'Erasmus+ — Innovation and Research in Informatics',
      institution: 'Barcelona School of Informatics, Polytechnic University of Catalonia',
      period: '2016–2017',
      achievement: null
    },
    {
      degree: 'BSc — Computing',
      institution: 'Faculty of Electrical Engineering and Computing, University of Zagreb',
      period: '2011–2015',
      achievement: null
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-meta">
                <span className="institution">{edu.institution}</span>
                <span className="separator">•</span>
                <span className="period">{edu.period}</span>
              </div>
              {edu.achievement && (
                <div className="education-achievement">{edu.achievement}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
