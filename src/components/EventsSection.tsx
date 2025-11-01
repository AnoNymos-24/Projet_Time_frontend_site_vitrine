
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, List } from 'lucide-react';

// Données des événements
const allEvents = [{
  id: 1,
  title: 'Soutenances des Projets de Fin d\'Études',
  date: '26 mai',
  endDate: '27 mai',
  location: 'Campus de Tunis',
  excerpt: 'L\'Université TIME informe ses étudiants que les soutenances des Projets de Fin d\'Études (PFE) en Informatique se tiendront du 26 au 27 mai 2025. Tous les étudiants concernés sont priés de déposer leur rapport final de PFE au plus tard le 20 mai 2025, sous peine de ne pas être programmés pour la soutenance.',
  image: '/lovable-uploads/a02ba6bc-9e80-47df-91e6-3eda99729609.png',
  requiresRegistration: false
}, {
  id: 2,
  title: 'Journée Portes Ouvertes',
  date: '25 mai',
  endDate: null,
  location: 'Campus de Tunis',
  excerpt: 'L\'Université TIME vous invite à sa Journée Portes Ouvertes de 9h à 16h. Découvrez nos formations innovantes, rencontrez nos enseignants et étudiants, visitez nos infrastructures modernes et assistez à des ateliers et conférences.',
  image: '/lovable-uploads/7fa7eb65-dbaa-4c4f-b3ef-7e98378972ce.png',
  requiresRegistration: true
}, {
  id: 3,
  title: 'Conférence sur l\'intelligence artificielle',
  date: '15 mai',
  endDate: null,
  location: 'Salle des conférences',
  excerpt: 'Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. Ire enim ipse compellebatur ad militem, quem exagitabat inopia simul et feritas, et alioqui coalito more in ordinarias dignitates asperum semper et saevum.',
  image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  requiresRegistration: true
}];

// Seulement les deux événements les plus proches pour l'affichage principal
const events = allEvents.slice(0, 2);

// Données supplémentaires pour la liste d'événements à venir (tous les événements)
const upcomingEvents = [{
  id: 3,
  title: 'Soutenances des Projets de Fin d\'Études',
  date: '26-27 mai',
  location: 'Campus de Tunis'
}, {
  id: 4,
  title: 'Journée Portes Ouvertes',
  date: '25 mai',
  location: 'Campus de Tunis'
}, {
  id: 5,
  title: 'Conférence sur l\'intelligence artificielle',
  date: '15 mai',
  location: 'Salle des conférences'
}, {
  id: 6,
  title: 'Atelier de programmation',
  date: '25 mai',
  location: 'Laboratoire informatique'
}, {
  id: 7,
  title: 'Séminaire sur le développement durable',
  date: '2 juin',
  location: 'Amphithéâtre central'
}, {
  id: 8,
  title: 'Remise des diplômes',
  date: '15 juin',
  location: 'Grand hall'
}, {
  id: 9,
  title: 'Début des inscriptions 2025-2026',
  date: '1 juillet',
  location: 'Service des inscriptions'
}];

const currentDate = () => {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} / ${month} / ${year}`;
};

const EventsSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section-container">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <span className="text-gray-800">Évènement</span> 
          <span className="text-time-orange">Universitaire</span>
        </h2>
        <div className="text-gray-500">{currentDate()}</div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map(event => (
              <Card key={event.id} className="overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(245,138,80,0.5)] group">
                <div className="flex flex-col border-l-4 border-time-orange h-full">
                  <div className="w-full h-64 overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="w-full flex flex-col p-0">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-time-orange mb-1">
                        <Calendar className="h-4 w-4 transition-transform group-hover:rotate-12" />
                        <span className="font-medium">
                          {event.date}
                          {event.endDate && <> — <span className="text-time-orange">{event.endDate}</span></>}
                        </span>
                      </div>
                      <CardTitle className="text-time-blue-1 transition-colors duration-300 text-base text-zinc-950">{event.title}</CardTitle>
                      <div className="text-sm text-gray-500 mt-1 bg-transparent">{event.location}</div>
                    </CardHeader>
                    
                    <CardContent className="pb-2">
                      <p className="line-clamp-3 text-xs text-gray-950">{event.excerpt}</p>
                    </CardContent>
                    
                    <CardFooter className="pt-0 mt-auto my-[15px]">
                      <a href="#" className={`text-xs text-gray-500 hover:text-time-blue-1 font-medium transition-colors duration-300 ${event.requiresRegistration ? "" : ""}`}>
                        {event.requiresRegistration ? "S'inscrire" : "Voir le calendrier"}
                      </a>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/3 bg-gray-50 rounded-lg p-6 border">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold text-time-blue-1 mx-[16px] text-zinc-950">Tous les événements</h3>
          </div>
          
          <ul className="space-y-4">
            {upcomingEvents.map(event => (
              <li key={event.id} className="border-b border-gray-200 pb-3 last:border-b-0 hover:bg-white/70 transition-colors p-2 rounded">
                <div className="flex flex-col">
                  <div className="flex items-start gap-3">
                    <div className="bg-time-orange/10 text-time-orange p-2 rounded-md text-sm font-semibold min-w-[70px] text-center">
                      {event.date}
                    </div>
                    <div>
                      <h4 className="font-medium">
                        <a href="#" className="text-gray-500 hover:text-time-blue-1 transition-colors duration-300 text-xs">
                          {event.title}
                        </a>
                      </h4>
                      <p className="text-sm text-gray-700">{event.location}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 text-center">
            <a href="#" className="text-xs text-gray-500 hover:text-time-blue-1 font-medium transition-colors duration-300">
              Voir tous les événements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
