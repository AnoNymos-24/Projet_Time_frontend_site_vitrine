import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';



const registrationItems = [
{
  icon: '🗓️',
  title: '22 OCT',
  description: 'Licence',
  links: ['Voir les conditions d\'admission', 'Fiche d\'inscription']
}, {
  icon: '🗓️',
  title: '22 OCT',
  description: 'Master',
  links: ['Voir les conditions d\'admission', 'Fiche d\'inscription']
}, {
  icon: '🗓️',
  title: '22 OCT',
  description: 'Cycle Préparatoire',
  links: ['Voir les conditions d\'admission', 'Fiche d\'inscription']
}, {
  icon: '🗓️',
  title: '22 OCT',
  description: 'Cycle Ingénieur',
  links: ['Voir les conditions d\'admission', 'Fiche d\'inscription']
}];





const RegistrationCard = ({
  item
}: {
  item: typeof registrationItems[0];
}) => <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow max-w-xs mx-auto">
    <CardHeader className="flex flex-col items-center pb-0 pt-2 px-2">
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-time-blue-1/10 text-time-blue-1 mb-1">
        <Calendar className="h-3 w-3" />
      </div>
      <h3 className="font-bold text-time-blue-1 mb-0.5 text-base text-center">{item.title}</h3>
      <p className="text-gray-700 font-medium mb-0.5 text-base text-center">{item.description}</p>
    </CardHeader>
    <CardContent className="pb-0 pt-1 px-2">
      <div className="flex flex-col gap-0 w-full">
        {item.links.map((link, linkIndex) => <Button key={linkIndex} variant="ghost" size="sm" className="w-full text-black hover:text-time-blue-1 hover:bg-transparent py-0.5 focus-visible:ring-0 focus-visible:ring-offset-0 text-xs">
            {link}
          </Button>)}
      </div>
    </CardContent>
  </Card>;
const FeaturesSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const isMobile = useIsMobile();
  return <section className="bg-time-blue-3/5 py-12">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-center text-time-blue-1 mb-6">
          Pré-inscription
        </h2>
        <div className={`grid ${isMobile ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'} gap-4 max-w-6xl mx-auto`}>
          {registrationItems.map(item => <RegistrationCard key={item.title} item={item} />)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;