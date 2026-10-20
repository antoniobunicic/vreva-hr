'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

// Half-filled circle: the filled half swings round (180°) when the theme flips.
function ThemeToggle({ isDarkMode, onToggle }) {
  const { t } = useTranslation('common');

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={t('nav.ariaToggleTheme')}
      aria-pressed={isDarkMode}
    >
      <svg
        className={`theme-icon${isDarkMode ? ' is-dark' : ''}`}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 3.75a8.25 8.25 0 0 0 0 16.5z" fill="currentColor" />
      </svg>
    </button>
  );
}

export default ThemeToggle;
