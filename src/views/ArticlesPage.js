'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { articlesByDate } from '../data/articles';
import { formatArticleDate } from '../utils/formatDate';
import ArticleCover from '../components/ArticleCover';

function ArticlesPage() {
  const { t, i18n } = useTranslation(['articles', 'common']);

  return (
    <article className="sl sl--articles">
      <header className="sl-hero container">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li aria-current="page">{t('list.title')}</li>
          </ol>
        </nav>
        <h1 className="sl-title">{t('list.title')}</h1>
        <p className="sl-lead">{t('list.subtitle')}</p>
      </header>

      <section className="container al-section">
        {articlesByDate.length === 0 ? (
          <p className="al-empty">{t('list.empty')}</p>
        ) : (
          <ol className="al-list">
            {articlesByDate.map((article) => (
              <li key={article.key}>
                <Link href={`/aktualno/${article.slug}`} className="al-row">
                  <ArticleCover article={article} />
                  <div className="al-head">
                    <p className="al-meta">
                      <time dateTime={article.date}>{formatArticleDate(article.date, i18n.language)}</time>
                      <span>{t('meta.readTime', { count: Number(t(`articles.${article.key}.readTime`)) })}</span>
                    </p>
                    <h2 className="al-title">{t(`articles.${article.key}.title`)}</h2>
                    <p className="al-excerpt">{t(`articles.${article.key}.excerpt`)}</p>
                  </div>
                  <span className="al-arrow" aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </section>
    </article>
  );
}

export default ArticlesPage;
