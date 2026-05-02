'use client';
import { useEffect } from 'react';
import i18n from '../i18n/config';

export default function I18nProvider({ children }) {
  useEffect(() => {
    const detected = i18n.services.languageDetector.detect();
    const lang = Array.isArray(detected) ? detected[0] : detected;
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, []);

  return children;
}
