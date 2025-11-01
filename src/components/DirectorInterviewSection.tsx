
import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

// Animation variants
const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};
const DirectorInterviewSection: React.FC = () => {
  return <section id="director-interview" className="py-12 bg-white">
      <div className="section-container">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={fadeIn} className="mb-8 text-center">
          <h2 className="text-time-blue-1 mb-4 text-2xl font-bold">Interview du Directeur</h2>
          <div className="w-20 h-1 bg-time-orange mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Découvrez la vision et l'engagement de notre école pour l'excellence académique.</p>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={fadeIn} className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <AspectRatio ratio={16 / 9}>
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/bhCPYY01MZQ?autoplay=1&mute=1&rel=0" 
                  title="Interview du Directeur de TIME Université" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>;
};
export default DirectorInterviewSection;
