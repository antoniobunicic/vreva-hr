'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

// One quiet link to the other language ("EN" on the Croatian site, "HR" on
// the English one). In the mobile menu it spells the language out.
const LANGUAGES = {
  en: { code: 'EN', name: 'English', label: 'Switch to English' },
  hr: { code: 'HR', name: 'Hrvatski', label: 'Prebaci na hrvatski' },
};

function LanguageSwitcher({ long = false }) {
  const { i18n } = useTranslation();
  const target = i18n.language?.startsWith('en') ? 'hr' : 'en';
  const lang = LANGUAGES[target];

  return (
    <button
      type="button"
      className={`language-switch${long ? ' language-switch--long' : ''}`}
      onClick={() => i18n.changeLanguage(target)}
      aria-label={lang.label}
      lang={target}
    >
      <span className="nav-label">{long ? lang.name : lang.code}</span>
    </button>
  );
}

export default LanguageSwitcher;
