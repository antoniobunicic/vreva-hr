// Central article registry for the /aktualno section.
// Plain module (no 'use client') so it can be imported both by server route
// files in app/ (for generateStaticParams / metadata) and by client components.
//
// Copy lives in the locale files under the `articles` namespace, keyed by
// `key` — this file only holds what has to be shared with the server.

export const articles = [
  {
    key: 'airbnbProvizija',
    slug: 'airbnb-provizija-15-5-posto',
    category: 'iznajmljivanje',
    date: '2026-08-19',
    // Typographic cover: the headline number lives in the locale files
    // (articles.<key>.cover); tone picks the colourway ('lime' | 'ink').
    coverTone: 'lime',
  },
];

const bySlug = Object.fromEntries(articles.map((a) => [a.slug, a]));
const byKey = Object.fromEntries(articles.map((a) => [a.key, a]));

export const articleSlugs = articles.map((a) => a.slug);

export function getArticleBySlug(slug) {
  return bySlug[slug];
}

export function getArticleByKey(key) {
  return byKey[key];
}

// Newest first — the order the /aktualno list renders in.
export const articlesByDate = [...articles].sort((a, b) => b.date.localeCompare(a.date));
