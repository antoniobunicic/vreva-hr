'use client';
import React from 'react';
import ContactForm from './ContactForm';

// Closing contact section used at the bottom of content pages: heading and copy
// on the left, the contact form on the right, on a hairline. Extra content
// (bullet points, a link) can be passed as children under the description.
function ContactBlock({ title, description, source, nameLabel, children }) {
  return (
    <section className="container sl-contact">
      <div className="sl-contact-inner">
        <div className="sl-contact-text">
          <h2 className="sl-cta-title">{title}</h2>
          {description && <p className="sl-cta-description">{description}</p>}
          {children}
        </div>
        <div className="sl-contact-form">
          <ContactForm source={source} nameLabel={nameLabel} />
        </div>
      </div>
    </section>
  );
}

export default ContactBlock;
