import ArticlesPage from '../../src/views/ArticlesPage';

export const metadata = {
  title: 'Aktualno — novosti iz weba, softvera i umjetne inteligencije',
  description: 'Novosti, analize i praktični savjeti o web stranicama, softveru, umjetnoj inteligenciji i digitalnom marketingu — za poduzetnike i tvrtke u Hrvatskoj.',
  alternates: {
    canonical: 'https://vreva.hr/aktualno/',
  },
  openGraph: {
    title: 'Aktualno — Vreva',
    description: 'Novosti, analize i praktični savjeti o web stranicama, softveru, umjetnoj inteligenciji i digitalnom marketingu — za poduzetnike i tvrtke u Hrvatskoj.',
    url: 'https://vreva.hr/aktualno/',
    images: [{ url: 'https://vreva.hr/og-image.png' }],
    type: 'website',
  },
};

export default function AktualnoPage() {
  return <ArticlesPage />;
}
