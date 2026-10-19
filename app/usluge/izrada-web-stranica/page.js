import ServiceLandingPage from '../../../src/views/services/ServiceLandingPage';

export const metadata = {
  title: 'Izrada web stranica — brzo i pristupačno',
  description: 'Profesionalne web stranice za poduzetnike, apartmane i male tvrtke. Moderna, responzivna sučelja, SEO optimizacija i pristupačne cijene.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/izrada-web-stranica/',
  },
};

export default function IzradaWebStranicaPage() {
  return <ServiceLandingPage serviceKey="webdev" />;
}
