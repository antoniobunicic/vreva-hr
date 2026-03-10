import Script from 'next/script';
import I18nProvider from '../src/components/I18nProvider';
import Layout from '../src/components/Layout';
import '../src/styles/index.css';

export const metadata = {
  title: {
    default: 'Vreva - Izrada web stranica za poduzetnike, apartmane, iznajmljivanje, cijena, Zagreb',
    template: '%s | Vreva',
  },
  description: 'Pristupačna i povoljna izrada web stranica i softverskih rješenja. Razvoj modernih web aplikacija uz najnovije tehnologije i AI.',
  metadataBase: new URL('https://vreva.hr'),
  openGraph: {
    type: 'website',
    locale: 'hr_HR',
    siteName: 'Vreva',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vreva - Izrada web stranica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Vreva',
              url: 'https://vreva.hr',
              logo: 'https://vreva.hr/logo.svg',
              description: 'Pristupačna i povoljna izrada web stranica i softverskih rješenja za poduzetnike u Hrvatskoj.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'HR',
              },
            }),
          }}
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17959648397"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17959648397');
          `}
        </Script>
        <I18nProvider>
          <Layout>{children}</Layout>
        </I18nProvider>
      </body>
    </html>
  );
}
