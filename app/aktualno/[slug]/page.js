import { notFound } from 'next/navigation';
import ArticleDetailPage from '../../../src/views/ArticleDetailPage';
import { articles, getArticleBySlug } from '../../../src/data/articles';

// SEO title/description per article (Croatian — the default rendered locale).
const articleMetadata = {
  airbnbProvizija: {
    title: 'Airbnb provizija 15,5 % — što se mijenja za iznajmljivače',
    description: 'Airbnb ukida podijeljenu naknadu: iznajmljivači plaćaju punih 15,5 %, gost ništa. U Hrvatskoj obavezno od 13. listopada 2026. Izračun i kako preračunati cijene.',
  },
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const meta = articleMetadata[article.key];
  const url = `https://vreva.hr/aktualno/${slug}/`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${meta.title} — Vreva`,
      description: meta.description,
      url,
      images: [{ url: 'https://vreva.hr/og-image.png' }],
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default async function ClanakPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const meta = articleMetadata[article.key];
  const url = `https://vreva.hr/aktualno/${slug}/`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: meta.title,
            description: meta.description,
            datePublished: article.date,
            dateModified: article.date,
            inLanguage: 'hr',
            image: 'https://vreva.hr/og-image.png',
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            author: { '@type': 'Organization', name: 'Vreva', url: 'https://vreva.hr' },
            publisher: {
              '@type': 'Organization',
              name: 'Vreva',
              logo: { '@type': 'ImageObject', url: 'https://vreva.hr/logo.svg' },
            },
          }),
        }}
      />
      <ArticleDetailPage articleKey={article.key} />
    </>
  );
}
