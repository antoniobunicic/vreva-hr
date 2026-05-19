import Projects from '../../src/components/Projects';

export const metadata = {
  title: 'Projekti — Vreva',
  description: 'Pregled projekata koje smo razvili — web stranice, softver po mjeri i mobilne aplikacije.',
  alternates: {
    canonical: 'https://vreva.hr/projekti/',
  },
  openGraph: {
    title: 'Projekti — Vreva',
    description: 'Pregled projekata koje smo razvili — web stranice, softver po mjeri i mobilne aplikacije.',
    url: 'https://vreva.hr/projekti/',
    images: [{ url: 'https://vreva.hr/og-image.png' }],
    type: 'website',
  },
};

export default function ProjektiPage() {
  return <Projects />;
}
