'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

// Typographic article cover: one headline number from the article set large on
// a brand colour, category in mono. Pure CSS — no image to produce per article.
function ArticleCover({ article, size = 'thumb' }) {
  const { t } = useTranslation('articles');
  const value = t(`articles.${article.key}.cover`, { defaultValue: '' });
  if (!value) return null;

  return (
    <div className={`ac ac--${article.coverTone || 'lime'} ac--${size}`} aria-hidden="true">
      <div className="ac-inner">
        <span className="ac-label">{t(`categories.${article.category}`)}</span>
        <span className="ac-value">{value}</span>
      </div>
    </div>
  );
}

export default ArticleCover;
