
import { EventData } from '@/components/articles/EventCard';

export const events: EventData[] = [
  {
    id: '1',
    title: 'Journée portes ouvertes',
    date: '25 Mai 2025',
    targetAudience: 'Futurs étudiants, Parents',
    description: 'Venez découvrir notre campus, rencontrer les enseignants et les étudiants, et en apprendre plus sur nos programmes de formation.',
    image: '/img/c28402db-ab1e-42a1-a6d6-abde7331f7e4.png',
    slug: 'journee-portes-ouvertes-2025',
    requiresRegistration: true,
  },
  {
    id: '2',
    title: 'Conférence sur la cybersécurité',
    date: '2 Juin 2025',
    targetAudience: 'Étudiants en informatique',
    description: "Un expert en cybersécurité viendra présenter les dernières tendances et menaces dans le domaine de la sécurité informatique.",
    image: '/img/28b98c57-a173-4a72-b9ff-be2e9455d2bc.png',
    slug: 'conference-cybersecurite',
    requiresRegistration: false,
    calendarLink: '/calendrier/juin-2025',
  },
  {
    id: '3',
    title: 'Tournoi de football inter-filières',
    date: '10 Juin 2025',
    targetAudience: 'Tous les étudiants',
    description: "Un tournoi de football amical entre les différentes filières de notre établissement. Venez représenter votre département!",
    image: '/img/3df705a8-075b-4941-a9ef-a0c007cd73fe.png',
    slug: 'tournoi-football-inter-filieres',
    requiresRegistration: true,
  },
  {
    id: '4',
    title: 'Séminaire sur la finance internationale',
    date: '15 Juin 2025',
    targetAudience: 'Étudiants en finance et gestion',
    description: "Un spécialiste en finance internationale viendra partager son expertise sur les marchés financiers mondiaux et les stratégies d'investissement.",
    slug: 'seminaire-finance-internationale',
    requiresRegistration: true,
  },
  {
    id: '5',
    title: 'Atelier CV et lettre de motivation',
    date: '20 Juin 2025',
    targetAudience: 'Étudiants en dernière année',
    description: "Apprenez à rédiger un CV et une lettre de motivation efficaces pour maximiser vos chances de décrocher un stage ou un emploi.",
    slug: 'atelier-cv-lettre-motivation',
    requiresRegistration: true,
  },
];

export const getEventBySlug = (slug: string): EventData | undefined => {
  return events.find(event => event.slug === slug);
};

export const getEventContent = (slug: string): string => {
  // In a real application, this would fetch the full description from a database or API
  return `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper, non ornare velit laoreet. Nullam nunc orci, elementum et nisl id, elementum pharetra nulla. Nullam non efficitur nisi.</p>
    <p>Donec nec viverra libero. Donec pellentesque neque eget sagittis feugiat. Aliquam erat volutpat. In a leo id justo faucibus fermentum id eu tortor. Nulla facilisi. Suspendisse potenti. Nulla facilisi.</p>
    <h2>Informations pratiques</h2>
    <p>Lieu : Campus principal, Amphithéâtre A1</p>
    <p>Horaire : 14h00 - 17h00</p>
    <p>Contact : evenements@timeuniversite.edu</p>
    <h2>Programme</h2>
    <p>13h30 : Accueil des participants</p>
    <p>14h00 : Début de l'événement</p>
    <p>15h30 : Pause café</p>
    <p>16h00 : Reprise de l'événement</p>
    <p>17h00 : Clôture et networking</p>
  `;
};
