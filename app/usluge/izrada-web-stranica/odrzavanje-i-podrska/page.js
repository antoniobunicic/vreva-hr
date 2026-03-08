import WebdevFeaturePage from '../../../../src/views/services/WebdevFeaturePage';

export const metadata = {
  title: 'Održavanje i podrška web stranice | Vreva',
  description: 'Redovno održavanje web stranice — ažuriranje sadržaja, sigurnosne nadogradnje, tehnička podrška i praćenje performansi. Tu smo i nakon objave.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/izrada-web-stranica/odrzavanje-i-podrska/',
  },
};

export default function Page() {
  return <WebdevFeaturePage featureSlug="odrzavanje-i-podrska" />;
}
