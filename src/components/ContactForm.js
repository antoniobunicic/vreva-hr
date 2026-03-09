'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ContactForm({ nameLabel, source, packageName }) {
  const { t } = useTranslation('contact');
  const [formStatus, setFormStatus] = useState(null);

  const reportConversion = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17959648397/Q_g3COenmPobEI356fNC',
        'value': 1.0,
        'currency': 'HRK',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xaqdawwl', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        setFormStatus('success');
        reportConversion();
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {source && <input type="hidden" name="_source" value={source} />}

      {packageName && (
        <div className="form-group">
          <label htmlFor={`package-${source}`}>{t('packageField')}</label>
          <input
            type="text"
            id={`package-${source}`}
            name="package_type"
            value={packageName}
            readOnly
            className="form-input--readonly"
          />
        </div>
      )}

      <div className="contact-free-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5Z"/>
          <path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75Z"/>
        </svg>
        {t('freeBadge')}
      </div>

      <div className="form-group">
        <label htmlFor={`name-${source}`}>{nameLabel || t('form.name')}</label>
        <input type="text" id={`name-${source}`} name="name" required />
      </div>

      <div className="form-group">
        <label htmlFor={`email-${source}`}>{t('form.email')}</label>
        <input type="email" id={`email-${source}`} name="email" required />
      </div>

      <div className="form-group">
        <label htmlFor={`phone-${source}`}>{t('form.phone')}</label>
        <input type="tel" id={`phone-${source}`} name="phone" />
      </div>

      <div className="form-group">
        <label htmlFor={`message-${source}`}>{t('form.message')}</label>
        <textarea id={`message-${source}`} name="message" rows="5" required></textarea>
      </div>

      <button type="submit" className="btn btn-primary btn-large">
        {t('form.submit')}
      </button>

      {formStatus === 'success' && (
        <p className="form-success">{t('form.success')}</p>
      )}
      {formStatus === 'error' && (
        <p className="form-error">{t('form.error')}</p>
      )}
    </form>
  );
}

export default ContactForm;
