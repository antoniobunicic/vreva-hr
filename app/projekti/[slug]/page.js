import { notFound } from 'next/navigation';
import ProjectDetailPage from '../../../src/views/ProjectDetailPage';
import { projects, getProjectBySlug } from '../../../src/data/projects';

// SEO title/description per project (Croatian — the default rendered locale).
const projectMetadata = {
  vilaistra: {
    title: 'Web stranica za luksuznu vilu u Istri',
    description: 'Cinematska web stranica za luksuznu vilu u Istri s hero videom i direktnim rezervacijama. Pogledajte kako gradimo premium online prisutnost.',
  },
  patrickboy: {
    title: 'Web stranica za taxi prijevoz i transfere',
    description: 'Brza web stranica za tvrtku za privatni taxi prijevoz i transfere. Jasan prikaz usluga i destinacija s pozivom na rezervaciju vožnje.',
  },
  apartmani: {
    title: 'Web stranica za apartmane na Cresu',
    description: 'Web stranica za apartmane s pogledom na more u Cresu — mediteranski dizajn, galerija i direktne rezervacije bez provizija.',
  },
  houselucy: {
    title: 'Web stranica za kuću za odmor u Ražancu',
    description: 'Web stranica za kuću za odmor u Ražancu s drone fotografijom, galerijom interijera i okoline te dalmatinskim ugođajem.',
  },
  otooles: {
    title: 'Web stranica za pansion na Plitvicama',
    description: 'Web stranica za obiteljski pansion kraj Plitvičkih jezera — prikaz soba, domaće kuhinje i blizine nacionalnog parka.',
  },
  flexportal: {
    title: 'FlexPortal — platforma za balansiranje energetske mreže',
    description: 'Razvoj web portala za balansiranje energetske mreže u TypeScriptu i React.js — upravljanje resursima, white-labeling i izvještavanje.',
  },
  timetable: {
    title: 'Sustav za upravljanje voznim redovima u javnom prijevozu',
    description: 'Mikroservisni sustav za import i upravljanje voznim redovima (VDV 452, NeTEx) — Java, Kafka, PostgreSQL i Kubernetes.',
  },
  angler: {
    title: 'Angler — aplikacija za skeniranje geometrijskih zadataka',
    description: 'Android aplikacija koja računalnim vidom rješava geometrijske zadatke skeniranjem mobitelom. Pobjednik App Start Contesta.',
  },
  bonfon: {
    title: 'Bonfon — aplikacija za rehabilitaciju govora kod djece',
    description: 'Android aplikacija za terapiju govora djece nagrađena Rektorovom nagradom. Vježbe za korekciju poremećaja artikulacije.',
  },
  thesis: {
    title: 'Distribuirani mehanizam za senzorske mreže',
    description: 'Distribuirana obrada kompleksnih zahtjeva u senzorskim mrežama — mehanizam inspiriran fog computingom i aukcijskim algoritmima.',
  },
  smarthome: {
    title: 'Smart Home — IoT aplikacije za pametni dom',
    description: 'IoT okruženja s Android aplikacijama za kontrolu pametnih uređaja i praćenje senzora u stvarnom vremenu.',
  },
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const meta = projectMetadata[project.key];
  const url = `https://vreva.hr/projekti/${slug}/`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${meta.title} — Vreva`,
      description: meta.description,
      url,
      images: [{ url: 'https://vreva.hr/og-image.png' }],
      type: 'article',
    },
  };
}

export default async function ProjektPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }
  return <ProjectDetailPage projectKey={project.key} />;
}
