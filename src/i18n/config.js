import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import English translations
import commonEN from './locales/en/common.json';
import heroEN from './locales/en/hero.json';
import aboutEN from './locales/en/about.json';
import projectsEN from './locales/en/projects.json';
import servicesEN from './locales/en/services.json';
import approachEN from './locales/en/approach.json';
import contactEN from './locales/en/contact.json';

// Import Croatian translations
import commonHR from './locales/hr/common.json';
import heroHR from './locales/hr/hero.json';
import aboutHR from './locales/hr/about.json';
import projectsHR from './locales/hr/projects.json';
import servicesHR from './locales/hr/services.json';
import approachHR from './locales/hr/approach.json';
import contactHR from './locales/hr/contact.json';

const resources = {
  en: {
    common: commonEN,
    hero: heroEN,
    about: aboutEN,
    projects: projectsEN,
    services: servicesEN,
    approach: approachEN,
    contact: contactEN
  },
  hr: {
    common: commonHR,
    hero: heroHR,
    about: aboutHR,
    projects: projectsHR,
    services: servicesHR,
    approach: approachHR,
    contact: contactHR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false // React already escapes
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

// Update HTML lang attribute on language change
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

export default i18n;
