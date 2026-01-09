import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: 'Backend',
      skills: [
        'Java, Kotlin, Python',
        'Spring Boot, Quarkus',
        'REST APIs, event-driven architectures',
        'Kafka, Pulsar',
        'OAuth2, JWT, multi-tenancy'
      ]
    },
    {
      title: 'Frontend',
      skills: [
        'React',
        'TypeScript, JavaScript',
        'HTML, CSS',
        'MUI',
        'Reusable components and custom hooks'
      ]
    },
    {
      title: 'Databases & Data',
      skills: [
        'PostgreSQL, SQLite, H2',
        'Liquibase, Flyway',
        'Complex SQL and data modeling'
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      skills: [
        'Docker',
        'Kubernetes',
        'AWS',
        'Helm, KEDA',
        'CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins)'
      ]
    },
    {
      title: 'Testing',
      skills: [
        'JUnit',
        'Jest',
        'Testing Library'
      ]
    },
    {
      title: 'Tooling & Workflow',
      skills: [
        'Git',
        'Agile / SCRUM',
        'Proactive use of AI in development workflows'
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
