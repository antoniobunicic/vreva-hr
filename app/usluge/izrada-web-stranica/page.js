import ServiceDetailPage from '../../../src/views/services/ServiceDetailPage';

export const metadata = {
  title: 'Izrada web stranica — brzo i pristupačno',
  description: 'Profesionalne web stranice za poduzetnike, apartmane i male tvrtke. Moderna, responzivna sučelja, SEO optimizacija i pristupačne cijene.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/izrada-web-stranica/',
  },
};

export default function IzradaWebStranicaPage() {
  return <ServiceDetailPage serviceKey="webdev" />;
}
