import WebdevFeaturePage from '../../../../src/views/services/WebdevFeaturePage';

export const metadata = {
  title: 'Responzivan dizajn — web stranica savršena na svakom uređaju | Vreva',
  description: 'Sve web stranice koje izrađujemo su potpuno responzivne — izvrsno izgledaju na mobitelima, tabletima i desktop računalima. Mobile-first pristup.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/izrada-web-stranica/responzivan-dizajn/',
  },
};

export default function Page() {
  return <WebdevFeaturePage featureSlug="responzivan-dizajn" />;
}
