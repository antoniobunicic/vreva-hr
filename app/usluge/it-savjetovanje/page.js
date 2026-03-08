import ServiceDetailPage from '../../../src/views/services/ServiceDetailPage';

export const metadata = {
  title: 'IT savjetovanje — Digitalizacija i optimizacija poslovanja',
  description: 'Strateško IT savjetovanje za digitalizaciju, optimizaciju poslovnih procesa i odabir pravih tehnologija za vaše poslovanje.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/it-savjetovanje/',
  },
};

export default function ItSavjetovanjePage() {
  return <ServiceDetailPage serviceKey="leadership" />;
}
