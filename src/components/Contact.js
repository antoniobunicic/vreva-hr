import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">
            Available for consulting, contract work, and collaboration opportunities.
            Feel free to reach out to discuss your project.
          </p>
          <div className="contact-methods">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:antonio.bunicic@gmail.com">antonio.bunicic@gmail.com</a>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a
                href="https://linkedin.com/in/b-antonio"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/b-antonio
              </a>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Zagreb, Croatia</p>
              <p className="contact-note">Remote-first, international teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
