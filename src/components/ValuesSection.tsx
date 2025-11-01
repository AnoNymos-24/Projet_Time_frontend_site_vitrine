import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { EmployabilityIcon, InnovationIcon } from '@/components/ui/custom-icons';
import { Aperture, Award, UserRoundCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
const ValueCard = ({
  icon: Icon,
  title,
  description,
  className
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}) => {
  return <motion.div whileHover={{
    scale: 1.03,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
  }} transition={{
    duration: 0.2
  }} className="h-full">
      <Card className={cn("h-full hover:shadow-lg transition-all duration-300 overflow-hidden relative group border border-transparent hover:border-time-blue-1/20", className)}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-time-blue-1 to-time-orange transform origin-left transition-transform duration-300 group-hover:scale-x-100" />
        <CardContent className="p-4 flex flex-col items-center text-center h-full">
          <div className="bg-gradient-to-br from-time-blue-1 to-time-blue-3 p-2 rounded-full mb-3 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-bold text-sm mb-2 text-time-blue-1 group-hover:text-time-blue-2 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 leading-tight text-xs text-justified text-center">{description}</p>
        </CardContent>
      </Card>
    </motion.div>;
};
const ValuesSection: React.FC = () => {
  const values = [{
    icon: EmployabilityIcon,
    title: "Employabilité",
    description: "Priorité à la formation de profils immédiatement opérationnels"
  }, {
    icon: InnovationIcon,
    title: "Innovation",
    description: "Intégration de méthodes pédagogiques modernes et d'outils digitaux"
  }, {
    icon: Aperture,
    title: "Ouverture",
    description: "Développement de partenariats académiques et professionnels, en Tunisie et à l'international"
  }, {
    icon: Award,
    title: "Excellence et éthique",
    description: "Exigence de qualité dans la formation, rigueur dans l'évaluation, et responsabilité sociale"
  }, {
    icon: UserRoundCheck,
    title: "Développement des compétences",
    description: "Évaluation selon des référentiels métiers pour une montée en compétence durable"
  }];
  return <div className="flex flex-row gap-3 overflow-x-auto pb-4">
      {values.map((value, index) => <motion.div key={index} initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5
      }
    }} viewport={{
      once: true
    }} className="w-1/5 min-w-[150px] flex-shrink-0">
          <ValueCard icon={value.icon} title={value.title} description={value.description} />
        </motion.div>)}
    </div>;
};
export default ValuesSection;