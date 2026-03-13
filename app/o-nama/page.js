import About from '../../src/components/About';

export const metadata = {
  title: 'O nama — Vreva digitalni tim',
  description: 'Saznajte više o Vreva timu — mali, iskusni software tim sa sjedištem u Zagrebu koji radi s klijentima diljem svijeta.',
  alternates: {
    canonical: 'https://vreva.hr/o-nama/',
  },
};

export default function ONamaPage() {
  return <About />;
}
