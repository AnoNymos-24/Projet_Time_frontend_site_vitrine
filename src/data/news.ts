
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

// News from the home page
export const news: NewsItem[] = [
  {
    id: 1,
    title: 'Sortie au Musée du Bardo organisée par le Club Event',
    date: '12 Mai 2025',
    excerpt: 'Le Club Event, supervisé par la Cellule d\'Écoute de TIME Université, a organisé une sortie culturelle au Musée du Bardo. Cette initiative vise à enrichir la culture générale des étudiants et à renforcer les liens entre eux en dehors du cadre académique.',
    image: '/lovable-uploads/4f9d0f76-f143-4e7e-ad1c-bd5770685711.png'
  }, 
  {
    id: 2,
    title: 'Conférence sur l\'entrepreneuriat à TIME Université',
    date: '28 Avril 2025',
    excerpt: 'TIME Université a organisé une conférence sur le thème de l\'entrepreneuriat, mettant en lumière les opportunités et les défis liés à la création d\'entreprise. Des experts du domaine ont partagé leurs expériences et conseils avec les étudiants, favorisant ainsi l\'esprit d\'initiative et d\'innovation.',
    image: '/lovable-uploads/000f6374-dff9-4d3f-bb28-85ae9996f124.png'
  }, 
  {
    id: 3,
    title: 'Programme de stages en France pour les étudiants de TIME',
    date: '15 Avril 2025',
    excerpt: 'TIME Université offre à ses étudiants en fin d\'études l\'opportunité de réaliser des stages en France. Ce programme vise à enrichir leur expérience professionnelle à l\'international et à renforcer leurs compétences dans un environnement multiculturel.',
    image: '/lovable-uploads/62158086-3207-4d5c-9da1-e3165d5433d3.png'
  },
  {
    id: 4,
    title: 'Présentation des spécialités de TIME Université',
    date: '10 Avril 2025',
    excerpt: 'Une vidéo a été publiée pour présenter les différentes spécialités offertes par TIME Université. Cette initiative permet aux futurs étudiants de mieux comprendre les programmes disponibles et de faire un choix éclairé pour leur parcours académique.',
    image: '/lovable-uploads/6d2bd301-a516-42b2-86f5-1e8eba6bf19a.png'
  }
];
