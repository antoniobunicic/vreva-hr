import WebdevFeaturePage from '../../../../src/views/services/WebdevFeaturePage';

export const metadata = {
  title: 'SEO optimizacija web stranice — budite vidljivi na Googleu | Vreva',
  description: 'Ugradbena SEO optimizacija u svaku web stranicu — meta tagovi, strukturirani podaci, brzo učitavanje i lokalni SEO. Dugoročna vidljivost bez plaćenog oglašavanja.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/izrada-web-stranica/seo-optimizacija/',
  },
};

export default function Page() {
  return <WebdevFeaturePage featureSlug="seo-optimizacija" />;
}
