import React from 'react';
import { Award, GraduationCap, Handshake, Users, School } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

// Type definition for advantage cards
interface AdvantageCardProps {
  icon: React.ElementType;
  title: string;
  description: React.ReactNode;
  color: string;
}

// Card component for each advantage
const AdvantageCard = ({
  icon: Icon,
  title,
  description,
  color
}: AdvantageCardProps) => {
  return <motion.div whileHover={{
    y: -5,
    scale: 1.02
  }} transition={{
    duration: 0.2
  }} className="h-full">
      <Card className={cn("h-full border-none overflow-hidden shadow-md hover:shadow-lg transition-all duration-300", "bg-gradient-to-br from-white to-gray-50")}>
        <CardContent className="p-4 flex flex-col items-center text-center h-full">
          <div className={cn("rounded-full p-3 mb-3", color)}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-time-blue-1">{title}</h3>
          <div className="text-gray-600 text-sm">{description}</div>
        </CardContent>
      </Card>
    </motion.div>;
};

// Schools component - modified to display in a horizontal slider
const Schools = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-full max-w-xs mx-auto mt-2">
      <Carousel 
        plugins={[autoplay.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {[
            {
              name: "ESI-TIME",
              fullName: "École Supérieure d'Ingénieurs"
            }, 
            {
              name: "EST-TIME",
              fullName: "École Supérieure de Technologie"
            }, 
            {
              name: "ESM-TIME",
              fullName: "École Supérieure de Management"
            }
          ].map((school, index) => (
            <CarouselItem key={index}>
              <div className="rounded-md p-2 text-center bg-transparent">
                <p className="font-bold text-sm text-time-blue-1">{school.name}</p>
                <p className="text-gray-600 text-xs font-normal">{school.fullName}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const WhyChooseUsSection: React.FC = () => {
  // Advantages data with corresponding icons and colors
  const advantages = [{
    icon: Award,
    title: "Des diplômes reconnus",
    description: "Accrédités par l'État tunisien et validés par le Ministère de l'Enseignement Supérieur.",
    color: "bg-time-blue-1"
  }, {
    icon: GraduationCap,
    title: "Une pédagogie centrée sur l'emploi",
    description: "Formation professionnalisante, orientation marché, suivi personnalisé.",
    color: "bg-time-orange"
  }, {
    icon: School,
    title: "Une offre académique diversifiée",
    description: <Schools />,
    color: "bg-time-blue-2"
  }, {
    icon: Users,
    title: "Un accompagnement individualisé",
    description: "Coaching, encadrement pédagogique, et suivi de carrière.",
    color: "bg-time-blue-3"
  }, {
    icon: Handshake,
    title: "Une double reconnaissance",
    description: "Académique et professionnelle : un pont entre formation et entreprise.",
    color: "bg-time-orange"
  }];
  return <div className="section-container py-6">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} viewport={{
      once: true,
      margin: "-100px"
    }} className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-time-blue-1 mb-2">Pourquoi choisir TIME Université ?</h2>
        <div className="w-16 h-1 bg-time-orange mx-auto mb-2"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Choisir TIME Université, c'est opter pour une formation d'excellence
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {advantages.map((advantage, index) => <motion.div key={index} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1,
        duration: 0.5
      }} viewport={{
        once: true
      }}>
            <AdvantageCard icon={advantage.icon} title={advantage.title} description={advantage.description} color={advantage.color} />
          </motion.div>)}
      </div>
      
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.5,
      duration: 0.5
    }} viewport={{
      once: true
    }} className="mt-6 text-center">
        <p className="text-sm font-medium text-time-blue-1 text-gray-950">
          Nous ne formons pas seulement des diplômés : nous préparons des acteurs du changement.
        </p>
      </motion.div>
    </div>;
};
export default WhyChooseUsSection;
