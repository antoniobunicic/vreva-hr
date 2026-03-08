import WebdevFeaturePage from '../../../../src/views/services/WebdevFeaturePage';

export const metadata = {
  title: 'Cijena izrade web stranice — transparentni paketi | Vreva',
  description: 'Okvirne cijene izrade web stranice: od 50 €/mj pretplate do 3.000 € za poslovnu stranicu. Transparentno, bez skrivenih troškova. Zatražite točnu ponudu.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/izrada-web-stranica/cijene/',
  },
};

export default function Page() {
  return <WebdevFeaturePage featureSlug="cijene" />;
}
