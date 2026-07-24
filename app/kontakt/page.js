import ContactPage from '../../src/views/ContactPage';

export const metadata = {
  title: 'Kontakt — Vreva',
  description: 'Javite nam se — izrada web stranica, razvoj softvera i IT savjetovanje. Email, telefon, WhatsApp ili pošaljite upit putem forme. Konzultacije su besplatne.',
  alternates: {
    canonical: 'https://vreva.hr/kontakt/',
  },
  openGraph: {
    title: 'Kontakt — Vreva',
    description: 'Javite nam se — izrada web stranica, razvoj softvera i IT savjetovanje. Konzultacije su besplatne i bez obveza.',
    url: 'https://vreva.hr/kontakt/',
    images: [{ url: 'https://vreva.hr/og-image.png' }],
    type: 'website',
  },
};

export default function KontaktPage() {
  return <ContactPage />;
}
