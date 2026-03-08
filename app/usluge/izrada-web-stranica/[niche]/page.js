import { notFound } from 'next/navigation';
import NicheDetailPage from '../../../../src/views/services/NicheDetailPage';

const validSlugs = ['ugostiteljstvo', 'apartmani', 'obrtnici', 'male-tvrtke', 'turizam', 'saloni', 'poliklinike', 'odvjetnicki-uredi', 'kulturne-ustanove', 'prijevoz'];

const nicheMetadata = {
  ugostiteljstvo: {
    title: 'Web stranice za ugostiteljstvo — restorani, kafići, barovi',
    description: 'Profesionalne web stranice za restorane, kafiće i barove. Jelovnik online, rezervacije i privlačan dizajn koji donosi goste.',
  },
  apartmani: {
    title: 'Web stranice za apartmane i iznajmljivanje',
    description: 'Moderna web stranica za apartmane i iznajmljivanje smještaja. Direktne rezervacije, galerija i prikaz slobodnih termina.',
  },
  obrtnici: {
    title: 'Web stranice za obrtnike — električari, vodoinstalateri, majstori',
    description: 'Web stranica za obrtnike koji žele više upita i novih klijenata. Brza izrada, kontakt forma i prikaz usluga.',
  },
  'male-tvrtke': {
    title: 'Web stranice za male tvrtke — povoljno i profesionalno',
    description: 'Profesionalna web stranica za malu tvrtku po pristupačnoj cijeni. SEO optimizacija, moderni dizajn i brza izrada.',
  },
  turizam: {
    title: 'Web stranice za turizam — turističke agencije i vodiči',
    description: 'Web stranice za turističke agencije, vodiče i turističke ponude. Privucite goste s profesionalnom online prisutnošću.',
  },
  saloni: {
    title: 'Web stranice za salone — frizerski, kozmetički, wellness',
    description: 'Web stranica za frizerski ili kozmetički salon. Online rezervacije, cjenik usluga i galerija radova.',
  },
  poliklinike: {
    title: 'Web stranice za poliklinike i ordinacije',
    description: 'Profesionalna web stranica za ordinacije i poliklinike. Prikaz usluga, tima i kontakta — pacijenti vas lakše pronalaze.',
  },
  'odvjetnicki-uredi': {
    title: 'Web stranice za odvjetničke urede',
    description: 'Moderna web stranica za odvjetnički ured koja gradi povjerenje i privlači nove klijente. Profesionalan dizajn i SEO.',
  },
  'kulturne-ustanove': {
    title: 'Web stranice za kulturne ustanove — muzeji, galerije, kazališta',
    description: 'Web stranica za muzeje, galerije i kulturne ustanove. Programi, događanja i informacije za publiku na jednom mjestu.',
  },
  prijevoz: {
    title: 'Web stranice za taxi, rent-a-car i rent-a-boat',
    description: 'Web stranica za prijevozničke usluge i iznajmljivanje vozila. Prikaz flote, cijena i direktne rezervacije.',
  },
};

export function generateStaticParams() {
  return validSlugs.map((niche) => ({ niche }));
}

export function generateMetadata({ params }) {
  const { niche } = params;
  if (!validSlugs.includes(niche)) {
    return {};
  }
  const meta = nicheMetadata[niche];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://vreva.hr/usluge/izrada-web-stranica/${niche}/`,
    },
  };
}

export default function NichePage({ params }) {
  const { niche } = params;
  if (!validSlugs.includes(niche)) {
    notFound();
  }
  return <NicheDetailPage niche={niche} />;
}
