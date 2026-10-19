import Link from 'next/link';

export const metadata = {
  title: 'Stranica nije pronađena',
};

export default function NotFound() {
  return (
    <article className="sl sl--404">
      <header className="sl-hero container">
        <h1 className="sl-title">404</h1>
        <p className="sl-lead">Stranica koju tražite ne postoji ili je premještena.</p>
        <div className="sl-hero-actions">
          <Link href="/" className="btn btn-ink">Povratak na početnu</Link>
          <Link href="/usluge" className="btn btn-secondary">Pogledajte usluge</Link>
        </div>
      </header>
    </article>
  );
}
