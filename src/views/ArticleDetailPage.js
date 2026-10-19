'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import { getArticleByKey } from '../data/articles';
import { formatArticleDate } from '../utils/formatDate';
import ArticleCover from '../components/ArticleCover';

// Article bodies are stored as block arrays in the locale files so both
// languages stay structurally identical and the markup lives here, not in JSON.
function ArticleBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="article-heading">{block.text}</h2>;

    case 'p':
      return <p className="article-paragraph">{block.text}</p>;

    case 'ul':
      return (
        <ul className="article-list">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );

    case 'table':
      return (
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr>
                {block.head.map((cell, i) => <th key={i} scope="col">{cell}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    j === 0
                      ? <th key={j} scope="row">{cell}</th>
                      : <td key={j} data-label={block.head[j]}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'callout':
      return (
        <aside className={`article-callout${block.variant ? ` article-callout--${block.variant}` : ''}`}>
          {block.title && <p className="article-callout-title">{block.title}</p>}
          <p className="article-callout-text">{block.text}</p>
        </aside>
      );

    default:
      return null;
  }
}

function ArticleDetailPage({ articleKey }) {
  const { t, i18n } = useTranslation(['articles', 'common']);
  const article = getArticleByKey(articleKey);

  const base = `articles.${articleKey}`;
  const blocks = t(`${base}.blocks`, { returnObjects: true });
  const cta = t(`${base}.cta`, { returnObjects: true });
  const sources = t(`${base}.sources`, { returnObjects: true });
  const readTime = t(`${base}.readTime`);

  return (
    <article className="sl sl--article">
      <header className="sl-hero container ad-hero">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol>
            <li><Link href="/">{t('nav.home', { ns: 'common' })}</Link></li>
            <li><Link href="/aktualno">{t('list.title')}</Link></li>
            <li aria-current="page">{t(`${base}.title`)}</li>
          </ol>
        </nav>
        <p className="ad-meta">
          <span>{t(`categories.${article.category}`)}</span>
          <time dateTime={article.date}>{formatArticleDate(article.date, i18n.language)}</time>
          <span>{t('meta.readTime', { count: Number(readTime) })}</span>
        </p>
        <h1 className="sl-title ad-title">{t(`${base}.title`)}</h1>
      </header>

      <div className="container ad-layout">
        <aside className="ad-aside">
          <Link href="/aktualno" className="ad-back">&larr; {t('meta.backToList')}</Link>
        </aside>

        <div className="article-body">
          <ArticleCover article={article} size="large" />
          <p className="article-lead">{t(`${base}.lead`)}</p>

          {Array.isArray(blocks) && blocks.map((block, i) => (
            <ArticleBlock key={i} block={block} />
          ))}

          <p className="article-disclaimer">{t(`${base}.disclaimer`)}</p>

          {sources && Array.isArray(sources.items) && (
            <div className="article-sources">
              <h2 className="article-sources-title">{sources.title}</h2>
              <ul>
                {sources.items.map((source, i) => (
                  <li key={i}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <section className="container ad-cta">
        <div className="ad-cta-inner">
          <div className="ad-cta-text">
            <h2 className="sl-cta-title">{cta.title}</h2>
            <p className="sl-cta-description">{cta.description}</p>
            {Array.isArray(cta.points) && (
              <ul className="article-cta-points">
                {cta.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            )}
            <Link href="/usluge/izrada-web-stranica/apartmani" className="sl-text-link">
              {cta.secondary}
            </Link>
          </div>
          <div className="ad-cta-form">
            <ContactForm source={`aktualno-${article.slug}`} />
          </div>
        </div>
      </section>
    </article>
  );
}

export default ArticleDetailPage;
