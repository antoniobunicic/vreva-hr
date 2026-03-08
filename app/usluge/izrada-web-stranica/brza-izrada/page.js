import WebdevFeaturePage from '../../../../src/views/services/WebdevFeaturePage';

export const metadata = {
  title: 'Brza izrada web stranice — od ideje do objave | Vreva',
  description: 'Izrađujemo web stranice brzo i bez nepotrebnog čekanja. Landing stranica za tjedan dana, prezentacijska stranica za 1–2 tjedna. Transparentni rokovi.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/izrada-web-stranica/brza-izrada/',
  },
};

export default function Page() {
  return <WebdevFeaturePage featureSlug="brza-izrada" />;
}
