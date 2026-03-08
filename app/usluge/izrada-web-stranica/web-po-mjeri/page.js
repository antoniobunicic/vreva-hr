import WebdevFeaturePage from '../../../../src/views/services/WebdevFeaturePage';

export const metadata = {
  title: 'Web stranica po mjeri — bez predložaka i ograničenja | Vreva',
  description: 'Izrađujemo web stranice po mjeri, bez WordPress predložaka. Svaka stranica kodirana od temelja — jedinstven dizajn, brzo učitavanje i neograničene mogućnosti.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/izrada-web-stranica/web-po-mjeri/',
  },
};

export default function Page() {
  return <WebdevFeaturePage featureSlug="web-po-mjeri" />;
}
