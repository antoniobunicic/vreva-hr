import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-title">Let's build something together</h2>
          <p className="contact-intro">
            Whether you're looking to modernize your stack, build a new product, or scale your team—we're here to help.
          </p>
          <div className="contact-cta">
            <a href="mailto:antonio.bunicic@gmail.com" className="btn btn-primary btn-large">
              Start a Conversation
            </a>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:antonio.bunicic@gmail.com">antonio.bunicic@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span>Zagreb, Croatia</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://linkedin.com/in/b-antonio"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/b-antonio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
