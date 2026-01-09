import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1 className="hero-title">Vreva</h1>
        <h2 className="hero-subtitle">Let us cook!</h2>
        <p className="hero-description">
          Nearly 10 years of experience building scalable backend systems,
          user-centric frontends, and delivering maintainable solutions.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a
            href="https://linkedin.com/in/b-antonio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
