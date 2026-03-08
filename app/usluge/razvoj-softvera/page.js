import ServiceDetailPage from '../../../src/views/services/ServiceDetailPage';

export const metadata = {
  title: 'Razvoj softvera — Full-stack rješenja po mjeri',
  description: 'Full-stack razvoj softvera od baze podataka do korisničkog sučelja. Backend, frontend, API integracije i produkcijsko postavljanje.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/razvoj-softvera/',
  },
};

export default function RazvojSoftveraPage() {
  return <ServiceDetailPage serviceKey="fullstack" />;
}
