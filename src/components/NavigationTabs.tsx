import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Info, Video, BookOpen, Award, CheckCircle, Building, Users, Handshake } from 'lucide-react';
interface NavigationTab {
  id: string;
  label: string;
  icon: JSX.Element;
}
interface NavigationTabsProps {
  onTabClick: (id: string) => void;
}
const NavigationTabs: React.FC<NavigationTabsProps> = ({
  onTabClick
}) => {
  // Navigation tabs configuration
  const navigationTabs: NavigationTab[] = [{
    id: "about-us",
    label: "Qui sommes-nous",
    icon: <Info className="h-4 w-4" />
  }, {
    id: "director-interview",
    label: "Interview du Directeur",
    icon: <Video className="h-4 w-4" />
  }, {
    id: "notre-vision",
    label: "Notre vision",
    icon: <BookOpen className="h-4 w-4" />
  }, {
    id: "nos-valeurs",
    label: "Nos valeurs",
    icon: <Award className="h-4 w-4" />
  }, {
    id: "why-choose-us",
    label: "Pourquoi nous choisir",
    icon: <CheckCircle className="h-4 w-4" />
  }, {
    id: "testimonials",
    label: "Témoignages",
    icon: <Users className="h-4 w-4" />
  }, {
    id: "partners",
    label: "Nos partenaires",
    icon: <Handshake className="h-4 w-4" />
  }, {
    id: "visit",
    label: "Nos locaux",
    icon: <Building className="h-4 w-4" />
  }];
  return <Tabs defaultValue="about-us" className="w-full">
      
    </Tabs>;
};
export default NavigationTabs;