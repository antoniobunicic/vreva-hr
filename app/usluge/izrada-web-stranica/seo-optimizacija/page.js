import WebdevFeaturePage from '../../../../src/views/services/WebdevFeaturePage';

export const metadata = {
  title: 'SEO optimizacija web stranice — vidljivi na Googleu i ChatGPT-u | Vreva',
  description: 'SEO i GEO optimizacija u svakoj web stranici — meta tagovi, strukturirani podaci, lokalni SEO i vidljivost u AI tražilicama poput ChatGPT-a. Dugoročni rezultati bez plaćenog oglašavanja.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/izrada-web-stranica/seo-optimizacija/',
  },
};

export default function Page() {
  return <WebdevFeaturePage featureSlug="seo-optimizacija" />;
}
