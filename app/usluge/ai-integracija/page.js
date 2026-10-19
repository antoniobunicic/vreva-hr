import ServiceLandingPage from '../../../src/views/services/ServiceLandingPage';

export const metadata = {
  title: 'AI integracija u poslovanje — AI chatbot i automatizacija za tvrtke',
  description: 'Uvodimo umjetnu inteligenciju u poslovanje: AI chatbot za web stranicu, automatizacija poslovnih procesa i AI asistenti nad vašim dokumentima. Besplatna analiza za tvrtke u Hrvatskoj.',
  alternates: {
    canonical: 'https://vreva.hr/usluge/ai-integracija/',
  },
};

export default function AiIntegracijaPage() {
  return <ServiceLandingPage serviceKey="ai" />;
}
