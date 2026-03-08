import HomePageContent from '../src/views/HomePageContent';

export const metadata = {
  title: 'Vreva - Izrada web stranica za poduzetnike, apartmane, iznajmljivanje, cijena, Zagreb',
  description: 'Pristupačna i povoljna izrada web stranica i softverskih rješenja. Razvoj modernih web aplikacija uz najnovije tehnologije i AI.',
  alternates: {
    canonical: 'https://vreva.hr/',
  },
  openGraph: {
    title: 'Vreva - Izrada web stranica',
    description: 'Pristupačna i povoljna izrada web stranica i softverskih rješenja za poduzetnike u Hrvatskoj.',
    url: 'https://vreva.hr/',
    images: [{ url: 'https://vreva.hr/og-image.png' }],
    type: 'website',
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
