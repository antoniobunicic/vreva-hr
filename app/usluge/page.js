import ServicesOverviewPage from '../../src/views/services/ServicesOverviewPage';

export const metadata = {
  title: 'Usluge — Izrada web stranica, razvoj softvera, IT savjetovanje',
  description: 'Pregledajte sve naše usluge: izrada web stranica, razvoj softvera i IT savjetovanje za male poduzetnike u Hrvatskoj.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/',
  },
};

export default function UslugsPage() {
  return <ServicesOverviewPage />;
}
