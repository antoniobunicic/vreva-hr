import ServiceLandingPage from '../../../src/views/services/ServiceLandingPage';

export const metadata = {
  title: 'Razvoj softvera — Digitalizacija i automatizacija poslovanja',
  description: 'Razvijamo softverska rješenja za digitalizaciju i automatizaciju poslovnih procesa. Web aplikacije, integracije sustava i interne poslovne alate.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/razvoj-softvera/',
  },
};

export default function RazvojSoftveraPage() {
  return <ServiceLandingPage serviceKey="fullstack" />;
}
