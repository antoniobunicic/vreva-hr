'use client';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

function PricingModal({ packageName, onClose }) {
  const { t } = useTranslation('services');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Zatvori">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <h2 className="modal-title">{t('detail.webdev.pricing.requestQuote')}</h2>
        <ContactForm source="pricing-modal" packageName={packageName} />
      </div>
    </div>
  );
}

export default PricingModal;
