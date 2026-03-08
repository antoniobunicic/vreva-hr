import Link from 'next/link';

export const metadata = {
  title: 'Stranica nije pronađena',
};

export default function NotFound() {
  return (
    <section className="service-page">
      <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h1>404 — Stranica nije pronađena</h1>
        <p>Stranica koju tražite ne postoji.</p>
        <Link href="/" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
          Povratak na početnu
        </Link>
      </div>
    </section>
  );
}
