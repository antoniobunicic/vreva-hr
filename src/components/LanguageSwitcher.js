import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-toggle">
      <button
        className={`language-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="language-separator">|</span>
      <button
        className={`language-btn ${currentLanguage === 'hr' ? 'active' : ''}`}
        onClick={() => changeLanguage('hr')}
        aria-label="Prebaci na Hrvatski"
      >
        HR
      </button>
    </div>
  );
}

export default LanguageSwitcher;
