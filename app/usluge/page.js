import ServicesOverviewPage from '../../src/views/services/ServicesOverviewPage';

export const metadata = {
  title: 'Usluge — Izrada web stranica, razvoj softvera, AI integracija, IT savjetovanje',
  description: 'Pregledajte sve naše usluge: izrada web stranica, razvoj softvera, AI integracija u poslovanje i IT savjetovanje za poduzetnike u Hrvatskoj.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/',
  },
};

export default function UslugsPage() {
  return <ServicesOverviewPage />;
}
