import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Who We Are</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">
              Vreva is a software development agency founded on nearly a decade of engineering excellence.
              We build products that matter.
            </p>
            <p>
              We specialize in migrating monolithic systems to modern microservices, designing robust APIs,
              and crafting user-centric interfaces that users love. Our approach is collaborative, detail-oriented,
              and focused on delivering high-quality, maintainable solutions.
            </p>
            <p>
              Working with international teams across time zones, we bring adaptability,
              accountability, and technical leadership to every project. Whether you're a startup building your MVP
              or an established company modernizing your stack, we deliver.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">~10</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Remote</div>
              <div className="stat-label">Based in Zagreb</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Global</div>
              <div className="stat-label">International Teams</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
