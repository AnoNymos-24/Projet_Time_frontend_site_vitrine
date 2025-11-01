import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import VisitScheduleModal from './VisitScheduleModal';

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

// Updated images from the user uploads
const campusImages = ["/lovable-uploads/0724ec08-be34-4b80-aedb-dc430ffa36a6.png", "/lovable-uploads/19d9fae2-0cc4-4b6a-9735-688319eb36c0.png", "/lovable-uploads/11c8528a-642d-41fc-b627-fb2be40a63d5.png", "/lovable-uploads/c5ffb18b-31c7-4de3-9b91-a95af465f14d.png", "/lovable-uploads/da386ba8-ba43-453f-a0fb-f942049dfe63.png", "/lovable-uploads/bc67a29e-5096-4f23-9495-4dcdab69403c.png", "/lovable-uploads/e7240c10-6ce9-46f7-ac8d-c0972471c177.png", "/lovable-uploads/731c411c-25ef-4adc-824b-34a6f89343aa.png"];
const CampusSection: React.FC = () => {
  return <section id="visit" className="bg-white py-0">
      <div className="section-container">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={fadeIn} className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-time-blue-1 mb-4">Nos locaux</h2>
          <div className="w-20 h-1 bg-time-orange mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre campus moderne et ses installations
          </p>
        </motion.div>
        
        <div className="relative overflow-hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4 snap-x">
            {campusImages.map((image, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="min-w-[300px] md:min-w-[400px] h-[300px] rounded-lg overflow-hidden snap-center shadow-md">
                <img src={image} alt={`Campus TIME Université ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </motion.div>)}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <VisitScheduleModal>
            <Button className="bg-time-blue-1 hover:bg-time-blue-2">
              Programmer une visite
            </Button>
          </VisitScheduleModal>
        </div>
      </div>
    </section>;
};
export default CampusSection;