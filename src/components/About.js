import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Senior Software Engineer with nearly 10 years of experience across backend, frontend, and mobile development.
              Currently operating as a solo developer and founder of a software development agency.
            </p>
            <p>
              Strong background in migrating monolithic systems to microservices, designing and building APIs,
              and creating user-centric front-end interfaces. Known for being collaborative, detail-oriented,
              and focused on delivering high-quality, maintainable solutions.
            </p>
            <p>
              Extensive experience working in remote, international, cross-functional teams, bringing adaptability,
              accountability, and technical leadership to every project.
            </p>
          </div>
          <div className="about-details">
            <div className="detail-item">
              <strong>Location:</strong> Zagreb, Croatia
            </div>
            <div className="detail-item">
              <strong>Work Mode:</strong> Remote-first, international teams
            </div>
            <div className="detail-item">
              <strong>Languages:</strong> Croatian (Native), English (Fluent), Spanish (Basic)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
