// Central project registry.
// Plain module (no 'use client') so it can be imported both by server route
// files in app/ (for generateStaticParams / metadata) and by client components.
import apartmaniImg from '../assets/projects/accommodation/apartmani-bunicic-full.png';
import houseLucyImg from '../assets/projects/accommodation/house-lucy-razanac-full.png';
import otoolesImg from '../assets/projects/accommodation/otooles-full.png';
import flexportalImg from '../assets/projects/flexportal/flexportal.png';
import sympowerLogo from '../assets/projects/flexportal/sympower.svg';
import timetableImg from '../assets/projects/atron/timetable-system.svg';
import atronLogo from '../assets/projects/atron/atron.svg';
import bonfonImg from '../assets/projects/bonfon/bonfon.png';
import chicoffeeImg from '../assets/projects/chicoffee/chicoffee.png';
import anglerSS0 from '../assets/projects/angler/SS0.jpg';
import anglerSS1 from '../assets/projects/angler/SS1.jpg';
import anglerSS3 from '../assets/projects/angler/SS3.jpg';
import anglerSS4 from '../assets/projects/angler/SS4.jpg';
import sensorNetworkImg from '../assets/projects/iot/sensor-network.svg';
import smarthomeImg from '../assets/projects/iot/smarthome.png';

const patrickBoyVideo = '/projects/patrick-boy-transferi/hero-patrick-boy.mp4';
const vilaIstraVideo = '/projects/vila-istra/hero-vila-istra.mp4';

// Display order matches the /projekti grid.
// `display` picks the showcase frame: 'browser' (websites), 'phone' (portrait
// app screenshots), 'screen' (landscape screenshots + illustrations).
export const projects = [
  { key: 'vilaistra',  slug: 'vila-istra',            category: 'web',      display: 'browser', video: vilaIstraVideo,  gallery: [] },
  { key: 'patrickboy', slug: 'patrick-boy-transferi', category: 'web',      display: 'browser', video: patrickBoyVideo, gallery: [] },
  { key: 'chicoffee',  slug: 'chi-coffee',            category: 'web',      display: 'browser', gallery: [chicoffeeImg] },
  { key: 'apartmani',  slug: 'apartmani-cres',        category: 'web',      display: 'browser', gallery: [apartmaniImg] },
  { key: 'houselucy',  slug: 'house-lucy-razanac',    category: 'web',      display: 'browser', gallery: [houseLucyImg] },
  { key: 'otooles',    slug: 'pansion-otooles',       category: 'web',      display: 'browser', gallery: [otoolesImg] },
  { key: 'flexportal', slug: 'flexportal',            category: 'software', display: 'screen',  gallery: [flexportalImg], logo: sympowerLogo },
  { key: 'timetable',  slug: 'sustav-javni-prijevoz', category: 'software', display: 'screen',  gallery: [timetableImg], logo: atronLogo, mono: true },
  { key: 'angler',     slug: 'angler',                category: 'mobile',   display: 'screen',  gallery: [anglerSS0, anglerSS1, anglerSS3, anglerSS4] },
  { key: 'bonfon',     slug: 'bonfon',                category: 'mobile',   display: 'screen',  gallery: [bonfonImg] },
  { key: 'thesis',     slug: 'senzorske-mreze',       category: 'software', display: 'screen',  gallery: [sensorNetworkImg], mono: true },
  { key: 'smarthome',  slug: 'smart-home',            category: 'mobile',   display: 'screen',  gallery: [smarthomeImg] },
];

const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
const byKey = Object.fromEntries(projects.map((p) => [p.key, p]));

export const projectSlugs = projects.map((p) => p.slug);

export function getProjectBySlug(slug) {
  return bySlug[slug];
}

export function getProjectByKey(key) {
  return byKey[key];
}

// Convenience map for linking cards without importing the whole record.
export const slugByKey = Object.fromEntries(projects.map((p) => [p.key, p.slug]));
