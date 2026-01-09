import React from 'react';

function Experience() {
  const experiences = [
    {
      title: 'Senior Fullstack Engineer',
      company: 'Sympower',
      location: 'Amsterdam',
      period: '2022–2025',
      responsibilities: [
        'Built modern, user-friendly front-end features using React, TypeScript, and MUI',
        'Migrated Java monolith functionality to cloud-native Kotlin microservices',
        'Acted as Feature Lead, owning technical planning and aligning with Product and UX/UI',
        'Supported features from discovery through production release',
        'Conducted technical interviews and code reviews',
        'Helped define coding standards and team architecture'
      ],
      techStack: 'React, TypeScript, Kotlin, Java, Spring Boot, AWS, Node.js'
    },
    {
      title: 'Software Engineer',
      company: 'ATRON',
      location: 'Zagreb',
      period: '2017–2022',
      responsibilities: [
        'Developed Quarkus-based Java microservices',
        'Implemented event-driven systems using Kafka',
        'Built synchronous REST APIs',
        'Designed data models and complex SQL queries',
        'Worked with PostgreSQL, SQLite, and H2',
        'Managed schema migrations using Liquibase',
        'Mentored junior developers'
      ],
      techStack: 'Java, Quarkus, PostgreSQL, Kafka, Kubernetes, Docker'
    },
    {
      title: 'Android Developer & Co-Founder',
      company: 'Angler',
      location: 'Zagreb',
      period: '2016–2017',
      responsibilities: [
        'Co-led a startup developing an Android app for solving geometry problems using smartphone scanning and computer vision',
        'Won App Start Contest 2016',
        'Selected for SPOCK incubator at FER',
        'Presented at Zagreb Connect, Idea Knockout, TEDxZagreb'
      ],
      techStack: 'Java, OpenCV'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-header">
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-meta">
                  <span className="company">{exp.company}</span>
                  <span className="separator">•</span>
                  <span className="location">{exp.location}</span>
                  <span className="separator">•</span>
                  <span className="period">{exp.period}</span>
                </div>
              </div>
              <ul className="timeline-responsibilities">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
              <div className="timeline-tech">
                <strong>Tech stack:</strong> {exp.techStack}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
