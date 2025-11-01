import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Club, Calendar, Users, LifeBuoy, School, Bot, Code, Globe, Cpu, Shield, Clock, Download, Trophy, Award } from 'lucide-react';
import ArticleSlider from '@/components/articles/ArticleSlider';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import ArticleCard from '@/components/articles/ArticleCard';
interface ClubData {
  id: string;
  name: string;
  description: string;
  members: number;
  meetings: string;
  logo?: string;
  type: 'faute' | 'robotique' | 'programmation' | 'sport' | 'culture' | 'reseau' | 'systeme' | 'web' | 'electronique';
  extendedDescription?: string;
  objectives?: string[];
  advantages?: string[];
  target?: string[];
  contactEmail?: string;
}
const scientificClubs: ClubData[] = [{
  id: '6',
  name: 'Club Réseau, Télécom, Open Source et Sécurité',
  description: 'Ce club permet aux étudiants de développer leurs compétences en architecture réseau et sécurité.',
  members: 32,
  meetings: 'Vendredi, 14h00 - 16h00',
  logo: '/lovable-uploads/12268076-1dc6-4b3c-a79a-5a4068085605.png',
  type: 'reseau',
  objectives: ['Simuler et tester des solutions logicielles d\'administration', 'Apprendre le développement des noyaux Unix'],
  advantages: ['Développer vos compétences en architecture et sécurité réseau', 'S\'initier avec les outils nécessaires pour la conduite des projets professionnels'],
  target: ['Étudiants en Réseaux Informatiques et Télécom'],
  contactEmail: 'Ur.sciences-tech@time.ens.tn'
}, {
  id: '7',
  name: 'Club Système Embarqué et Temps Réel',
  description: 'Un club dédié aux systèmes embarqués et applications temps réel pour projets d\'entreprise.',
  members: 28,
  meetings: 'Jeudi, 15h00 - 17h00',
  logo: '/lovable-uploads/d2da1691-bb23-49c8-9215-f8aaf027a438.png',
  type: 'systeme',
  objectives: ['Connaître le fonctionnement des systèmes embarqués', 'Se familiariser avec les notions d\'Android, IIOC, PIC C et FPG A'],
  advantages: ['Développer des applications en temps réel répondantes aux projets entreprises'],
  target: ['Étudiants en Génie Logiciel et Réseau Informatiques et Télécom'],
  contactEmail: 'Ur.sciences-tech@time.ens.tn'
}, {
  id: '8',
  name: 'Club Web',
  description: 'Club axé sur le développement web et les frameworks modernes comme Symfony.',
  members: 35,
  meetings: 'Mercredi, 14h00 - 16h00',
  logo: '/lovable-uploads/937f7c71-6d7e-4172-b9ec-fbefd4cc9cf0.png',
  type: 'web',
  objectives: ['Se familiariser avec les notions de Symfony', 'Enrichir vos compétences en développement web (PHP 5)'],
  advantages: ['Développer des Symfony 1.4 et Symfony 2', 'Développer des applications web pour les réseaux sociaux et Intranet'],
  target: ['Étudiants de Génie Logiciel'],
  contactEmail: 'Ur.sciences-tech@time.ens.tn'
}, {
  id: '9',
  name: 'Club Électronique et Informatique Industriel',
  description: 'Club spécialisé dans l\'électronique et la programmation de microcontrôleurs.',
  members: 26,
  meetings: 'Lundi, 15h00 - 17h00',
  logo: '/lovable-uploads/ae69a31e-008a-4941-b324-6d1834bdfc5f.png',
  type: 'electronique',
  objectives: ['S\'initier au simulateur électronique de base', 'Savoir comment réaliser des cartes (pic, DSP...)'],
  advantages: ['Développer des programmations sur des microcontrôleurs', 'Participer à des concours nationaux de robotique'],
  target: ['Étudiants de Cycle Préparatoire'],
  contactEmail: 'Ur.sciences-tech@time.ens.tn'
}, {
  id: '1',
  name: 'Club d\'Informatique',
  description: 'Ce club permet aux étudiants de développer leurs compétences informatiques à travers des projets pratiques, des hackathons et des conférences techniques.',
  members: 45,
  meetings: 'Mercredi, 16h00 - 18h00',
  logo: '/lovable-uploads/c5ffb18b-31c7-4de3-9b91-a95af465f14d.png',
  type: 'programmation',
  extendedDescription: 'Le Club d\'Informatique offre un environnement stimulant pour les passionnés de programmation. Les membres travaillent sur des projets réels, participent à des compétitions de codage et organisent des ateliers pour les débutants. Le club invite régulièrement des professionnels de l\'industrie pour des conférences et maintient des partenariats avec plusieurs entreprises technologiques pour faciliter les stages et les opportunités professionnelles.'
}, {
  id: '2',
  name: 'Club Entrepreneuriat',
  description: 'Destiné aux étudiants souhaitant développer leur esprit entrepreneurial, ce club organise des rencontres avec des entrepreneurs, des ateliers et des compétitions de business plan.',
  members: 38,
  meetings: 'Mardi, 17h00 - 19h00',
  logo: '/lovable-uploads/bc67a29e-5096-4f23-9495-4dcdab69403c.png',
  type: 'faute',
  extendedDescription: 'Le Club Entrepreneuriat encourage l\'innovation et l\'esprit d\'entreprise parmi les étudiants. Les membres ont l\'occasion de transformer leurs idées en projets concrets, de participer à des concours de pitch et d\'apprendre des entrepreneurs à succès. Le club organise également des visites d\'entreprises et des séminaires sur divers aspects de la création et de la gestion d\'entreprise.'
}, {
  id: '3',
  name: 'Club Sportif',
  description: 'Le club sportif propose différentes activités telles que le football, le basketball, le volleyball et l\'athlétisme. Il organise également des tournois inter-universités.',
  members: 60,
  meetings: 'Lundi et Jeudi, 18h00 - 20h00',
  logo: '/lovable-uploads/d08bd437-5b13-4e3d-9ed5-f78220d11786.png',
  type: 'sport',
  extendedDescription: 'Le Club Sportif offre une variété d\'activités physiques pour tous les niveaux. Des entraînements réguliers sont organisés avec des coachs qualifiés, et les équipes représentent l\'établissement lors de compétitions régionales et nationales. Le club promeut l\'esprit d\'équipe, la discipline et le bien-être physique.'
}, {
  id: '4',
  name: 'Club Culturel',
  description: 'Ce club organise des activités culturelles telles que des projections de films, des expositions artistiques, des concerts et des sorties culturelles.',
  members: 25,
  meetings: 'Vendredi, 16h00 - 18h00',
  logo: '/lovable-uploads/324d4197-60f3-4c45-b785-5338a4530b0a.png',
  type: 'culture',
  extendedDescription: 'Le Club Culturel célèbre la diversité artistique et culturelle. Il organise des événements variés comme des soirées thématiques, des expositions d\'art étudiant, et des sorties à des musées et théâtres. Le club encourage l\'expression créative et offre un espace où les étudiants peuvent partager leurs talents et découvrir de nouvelles formes d\'art.'
}, {
  id: '5',
  name: 'Club Robotique',
  description: 'Le club de robotique permet aux étudiants de concevoir, construire et programmer des robots pour participer à des compétitions nationales et internationales.',
  members: 30,
  meetings: 'Jeudi et Samedi, 14h00 - 17h00',
  logo: '/lovable-uploads/11c8528a-642d-41fc-b627-fb2be40a63d5.png',
  type: 'robotique',
  extendedDescription: 'Le Club Robotique est dédié à l\'exploration de la technologie robotique. Les membres travaillent en équipes sur la conception, la construction et la programmation de robots autonomes. Le club participe à des concours prestigieux et collabore avec des laboratoires de recherche. C\'est un excellent moyen de mettre en pratique des connaissances en ingénierie, électronique et programmation.'
}];

// Filtrer les articles pertinents pour chaque type de club
/* const getRelatedArticles = (clubType: string) => {
  switch (clubType) {
    case 'programmation':
      return articles.filter(article => article.id === '4' || article.id === '6');
    case 'robotique':
      return articles.filter(article => article.id === '2' || article.id === '5');
    case 'faute':
      return articles.filter(article => article.id === '1' || article.id === '3');
    case 'reseau':
      // Utiliser des conditions compatibles avec le type article.category
      return articles.filter(article => article.category === 'vie-scolaire' || article.category === 'vie-hors-ecole');
    case 'systeme':
      return articles.filter(article => article.category === 'vie-scolaire' || article.category === 'actualite');
    case 'web':
      return articles.filter(article => article.category === 'actualite');
    case 'electronique':
      return articles.filter(article => article.category === 'vie-hors-ecole');
    default:
      return articles.slice(0, 2);
    // Default: return first 2 articles
  }
}; 

// Filtrer les articles pour la vie après les cours
const afterSchoolArticles = articles.filter(article => article.category === 'vie-hors-ecole' || article.title.toLowerCase().includes('hackathon') || article.title.toLowerCase().includes('tournoi'));

// Récupérer spécifiquement l'article du musée
const museeArticle = articles.find(article => article.slug === 'sortie-musee-bardo');
*/



const ClubCard: React.FC<{
  club: ClubData;
}> = ({
  club
}) => {
  const getClubIcon = (type: string) => {
    switch (type) {
      case 'programmation':
        return <Code className="h-6 w-6 text-blue-600" />;
      case 'robotique':
        return <Bot className="h-6 w-6 text-purple-600" />;
      case 'faute':
        return <School className="h-6 w-6 text-green-600" />;
      case 'sport':
        return <Club className="h-6 w-6 text-red-600" />;
      case 'reseau':
        return <Shield className="h-6 w-6 text-orange-600" />;
      case 'systeme':
        return <Cpu className="h-6 w-6 text-indigo-600" />;
      case 'web':
        return <Globe className="h-6 w-6 text-sky-600" />;
      case 'electronique':
        return <Clock className="h-6 w-6 text-emerald-600" />;
      default:
        return <Club className="h-6 w-6 text-gray-600" />;
    }
  };
  return <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
      <div className="flex flex-col h-full">
        {club.logo && <div className="aspect-video overflow-hidden">
            <img src={club.logo} alt={club.name} className="w-full h-full object-cover" />
          </div>}
        <CardContent className="p-5 flex-grow">
          <div className="flex items-center gap-2 mb-2">
            {getClubIcon(club.type)}
            <h3 className="font-bold text-lg">{club.name}</h3>
          </div>
          <p className="text-gray-600 mb-4">{club.description}</p>
          
          {club.extendedDescription && <div className="mb-4">
              <p className="text-gray-700 text-sm">{club.extendedDescription}</p>
            </div>}
          
          {club.objectives && club.objectives.length > 0 && <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2 text-time-blue-1">OBJECTIFS:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {club.objectives.map((objective, index) => <li key={index}>{objective}</li>)}
              </ul>
            </div>}
          
          {club.advantages && club.advantages.length > 0 && <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2 text-time-blue-1">AVANTAGES:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {club.advantages.map((advantage, index) => <li key={index}>{advantage}</li>)}
              </ul>
            </div>}
          
          {club.target && club.target.length > 0 && <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2 text-time-blue-1">CIBLE:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {club.target.map((target, index) => <li key={index}>{target}</li>)}
              </ul>
            </div>}
          
          <div className="flex flex-col space-y-2 text-sm mt-auto">
            <div className="flex items-center text-gray-700">
              <Users className="h-4 w-4 mr-2" />
              {club.members} membres
            </div>
            <div className="flex items-center text-gray-700">
              <Calendar className="h-4 w-4 mr-2" />
              {club.meetings}
            </div>
            {club.contactEmail && <div className="flex items-center text-gray-700 italic text-xs">
                Contact: {club.contactEmail}
              </div>}
          </div>
        </CardContent>

      </div>
    </Card>;
};
const FootballClubGallery: React.FC = () => {
  const footballImages = ['/lovable-uploads/cbeddf3a-3061-4190-a71c-132ecb7e803b.png', '/lovable-uploads/d016cfe0-0c54-4848-a222-e8f02d270da9.png', '/lovable-uploads/ff3cdbce-8745-4e89-a7de-e99211e32a15.png', '/lovable-uploads/f8d4314d-a188-438b-8cf2-85958b23038c.png', '/lovable-uploads/e87b78aa-d56f-41cb-8a1e-f3d814ecd203.png', '/lovable-uploads/14fc0703-e9c1-4b76-b55d-686094cefa7f.png'];
  return <div className="mt-6 mb-10">
      <Carousel className="w-full">
        <CarouselContent>
          {footballImages.map((image, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={image} alt={`Club de football TIME - Image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  </div>
                </div>
              </div>
            </CarouselItem>)}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-2">
          <CarouselPrevious className="static translate-y-0 mr-2" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>;
};
const VieEstudiantine: React.FC = () => {
  const {
    section
  } = useParams<{
    section?: string;
  }>();
  const defaultTab = section || 'clubs';
  return <Layout>
      <div className="container max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-time-blue-1 mb-8">Vie Estudiantine</h1>
        
        <Tabs defaultValue={defaultTab} className="space-y-6">
          <TabsList className="bg-gray-100 p-1">
            <TabsTrigger value="clubs" className="flex items-center gap-2">
              <Club className="h-4 w-4" />
              <span>Clubs de football</span>
            </TabsTrigger>
            <TabsTrigger value="clubs-scientifiques" className="flex items-center gap-2">
              <Bot className="h-4 w-4" />
              <span>Clubs Scientifiques</span>
            </TabsTrigger>
            <TabsTrigger value="apres-cours" className="flex items-center gap-2">
              <LifeBuoy className="h-4 w-4" />
              <span>Vie après les cours</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="clubs">
            <div className="bg-gradient-to-r from-time-blue-1 to-blue-900 text-white p-8 rounded-lg mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-4">Club de Football TIME</h2>
                  <p className="text-xl mb-4">
                    Rejoignez notre équipe dynamique de football et montrez vos talents sur le terrain !
                  </p>
                  <p className="mb-6">
                    Le club de football de TIME Université offre aux étudiants passionnés de football
                    l'opportunité de s'entraîner régulièrement et de représenter l'établissement 
                    lors des compétitions inter-universitaires.
                  </p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      <span>+30 membres</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5" />
                      <span>Champions 2023-2024</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="rounded-full overflow-hidden border-4 border-white h-52 w-52 mx-auto">
                    <img src="/lovable-uploads/cbeddf3a-3061-4190-a71c-132ecb7e803b.png" alt="Club de Football TIME" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <FootballClubGallery />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Trophy className="h-8 w-8 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Palmarès</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-amber-500" />
                          <span>Champions du tournoi inter-universitaire 2023-2024</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-amber-500" />
                          <span>Finalistes de la coupe nationale des établissements privés 2022</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-amber-500" />
                          <span>Meilleure attaque du championnat 2021</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-8 w-8 text-time-blue-1 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Événements à venir</h3>
                      <ul className="space-y-3">
                        <li>
                          <p className="font-semibold">Tournoi inter-filières</p>
                          <p className="text-sm text-gray-600">_____________ • Terrain Galaxy Gym</p>
                        </li>
                        <li>
                          <p className="font-semibold">Match amical vs Université de Carthage</p>
                          <p className="text-sm text-gray-600">_____________ • Stade Municipal</p>
                        </li>
                        <li>
                          <p className="font-semibold">Camps d'entraînement d'été</p>
                          <p className="text-sm text-gray-600">_____________ • Centre sportif TIME</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Informations pratiques</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-time-blue-1 mb-2">Entraînements</h4>
                  <p className="mb-1">Horaires : Mardi et Jeudi, 17h00 - 19h00</p>
                  <p className="mb-1">Lieu : Terrain Galaxy Gym (partenaire officiel)</p>
                  <p>Coach : Mohamed Habib (ancien joueur professionnel)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-time-blue-1 mb-2">Comment rejoindre le club</h4>
                  <p className="mb-1">Inscriptions : En début d'année universitaire</p>
                  <p className="mb-1">Sélections : Septembre-Octobre 2025</p>
                  <p className="mb-1">Contact : sport@time.ens.tn</p>
                  <p>Cotisation annuelle : 50 TND (équipements inclus)</p>
                </div>
              </div>
              <div className="mt-6">
                
                  <Button variant="outline" className="flex items-center gap-2 border-time-blue-1 text-time-blue-1 hover:bg-time-blue-1/10">
                   <a href="/img/club_time.jpg"><Download className="h-5 w-5" />
                   <span>Télécharger le planning des matchs</span>
                  </a>
                </Button>
                

              </div>
            </div>
          </TabsContent>

          <TabsContent value="clubs-scientifiques">
            <div className="mb-6">
              <div className="bg-red-50 border border-red-100 p-6 rounded-lg mb-8">
                <h2 className="text-3xl font-bold text-red-600 mb-3">NOUVEAUX Clubs SCIENTIFIQUES à TIME UNIVERSITÉ</h2>
                <p className="text-gray-700 mb-4">
                  Découvrez nos nouveaux clubs scientifiques et développez vos compétences techniques dans différents domaines.
                </p>
                <p className="text-sm text-gray-600">
                  Contact : <a href="mailto:Ur.sciences-tech@time.ens.tn" className="text-blue-600 hover:underline">Ur.sciences-tech@time.ens.tn</a>
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {scientificClubs.filter(club => ['reseau', 'systeme', 'web', 'electronique'].includes(club.type)).map(club => <ClubCard key={club.id} club={club} />)}
              </div>

              <div className="mt-8 text-center">
                

                <Button variant="outline" className="flex items-center gap-2 border-time-blue-1 text-time-blue-1 hover:bg-time-blue-1/10" onClick={() => window.open('/clubs/clubs-scientifiques.pdf', '_blank')}>
                  <a href="/img/club_time.jpg/" ><Download className="h-5 w-5" />
                  <span>Télécharger la brochure des clubs scientifiques</span>
                  </a>
                </Button>
                
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="apres-cours">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Activités culturelles et sociales */}
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-time-blue-1 to-time-blue-2 p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <LifeBuoy className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">Activités Culturelles</h2>
                  </div>
                  <p className="text-blue-100">
                    Découvrez les nombreuses activités culturelles et sociales organisées pour enrichir votre parcours étudiant.
                  </p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-time-blue-1 mb-3 flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Sorties et Événements
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-time-orange rounded-full mt-2 flex-shrink-0"></span>
                          Sorties culturelles (musées, théâtres, expositions)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-time-orange rounded-full mt-2 flex-shrink-0"></span>
                          Soirées thématiques et événements festifs
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-time-orange rounded-full mt-2 flex-shrink-0"></span>
                          Excursions et voyages éducatifs
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-time-orange rounded-full mt-2 flex-shrink-0"></span>
                          Compétitions sportives et tournois
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-time-blue-1 mb-3 flex items-center gap-2">
                        <Trophy className="h-5 w-5" />
                        Événements Annuels
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-time-blue-1/10 to-time-orange/10 p-3 rounded-lg">
                          <h4 className="font-medium text-time-blue-1">Gala de fin d'année</h4>
                          <p className="text-sm text-gray-600">Célébration de réussite</p>
                        </div>
                        <div className="bg-gradient-to-br from-time-blue-1/10 to-time-orange/10 p-3 rounded-lg">
                          <h4 className="font-medium text-time-blue-1">Festival des arts</h4>
                          <p className="text-sm text-gray-600">Expression créative</p>
                        </div>
                        <div className="bg-gradient-to-br from-time-blue-1/10 to-time-orange/10 p-3 rounded-lg">
                          <h4 className="font-medium text-time-blue-1">Journées portes ouvertes</h4>
                          <p className="text-sm text-gray-600">Rencontres et découvertes</p>
                        </div>
                        <div className="bg-gradient-to-br from-time-blue-1/10 to-time-orange/10 p-3 rounded-lg">
                          <h4 className="font-medium text-time-blue-1">Hackathons</h4>
                          <p className="text-sm text-gray-600">Défis technologiques</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bien-être et développement personnel */}
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-time-orange to-orange-500 p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">Bien-être Étudiant</h2>
                  </div>
                  <p className="text-orange-100">
                    Services et activités dédiés au bien-être et au développement personnel des étudiants.
                  </p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-time-blue-1 mb-3 flex items-center gap-2">
                        <School className="h-5 w-5" />
                        Soutien Académique
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-time-blue-1 rounded-full mt-2 flex-shrink-0"></span>
                          Tutorat et accompagnement personnalisé
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-time-blue-1 rounded-full mt-2 flex-shrink-0"></span>
                          Groupes d'étude et sessions de révision
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-time-blue-1 rounded-full mt-2 flex-shrink-0"></span>
                          Orientation professionnelle
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-time-blue-1 mb-3 flex items-center gap-2">
                        <LifeBuoy className="h-5 w-5" />
                        Services de Bien-être
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-br from-time-orange/10 to-time-blue-1/10 p-3 rounded-lg">
                          <h4 className="font-medium text-time-orange">Espace détente</h4>
                          <p className="text-sm text-gray-600">Zones de repos et relaxation</p>
                        </div>
                        <div className="bg-gradient-to-br from-time-orange/10 to-time-blue-1/10 p-3 rounded-lg">
                          <h4 className="font-medium text-time-orange">Activités sportives</h4>
                          <p className="text-sm text-gray-600">Fitness et sports collectifs</p>
                        </div>
                        <div className="bg-gradient-to-br from-time-orange/10 to-time-blue-1/10 p-3 rounded-lg">
                          <h4 className="font-medium text-time-orange">Événements sociaux</h4>
                          <p className="text-sm text-gray-600">Networking et convivialité</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>;
};
export default VieEstudiantine;
