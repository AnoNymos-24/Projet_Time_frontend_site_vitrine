import React from 'react';
import { motion } from 'framer-motion';

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
const MissionSection: React.FC = () => {
  return <section id="notre-vision" className="bg-gray-50 py-0">
      <div className="section-container">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={fadeIn} className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-time-blue-1 mb-4">Notre mission</h2>
          <div className="w-20 h-1 bg-time-orange mx-auto mb-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn} className="relative rounded-lg overflow-hidden h-96 order-2 md:order-1">
            <img alt="Notre mission" className="w-full h-full object-cover" src="/img/CER_09.jpg" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn} className="prose prose-lg text-gray-600 space-y-4 order-1 md:order-2 prose-justified">
            <p className="font-semibold text-xl text-justified">
              Former les leaders de demain dans les domaines du numérique et du management.
            </p>
            <p className="text-justified">
              TIME Université s'engage à former des professionnels compétents, responsables et prêts à relever les
              défis d'un marché du travail en constante évolution.
            </p>
            <p className="font-medium text-justified">Notre pédagogie repose sur :</p>
            <ul>
              <li className="text-justified">Un juste équilibre entre théorie et pratique</li>
              <li className="text-justified">Des stages en entreprise et des projets concrets sur le terrain</li>
              <li className="text-justified">Une recherche appliquée actualisée en continu selon les besoins du marché</li>
            </ul>
            <p className="text-justified">
              Grâce à cette approche, nos diplômés sont non seulement qualifiés, mais aussi préparés à agir,
              innover et diriger dès leur sortie.
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default MissionSection;