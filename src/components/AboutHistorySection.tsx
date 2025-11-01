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
const AboutHistorySection: React.FC = () => {
  return <section id="about-us" className="py-16 bg-slate-100">
      <div className="section-container">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={fadeIn} className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-time-blue-1 mb-4">Qui sommes-nous</h2>
          <div className="w-20 h-1 bg-time-orange mx-auto mb-4"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Logo on the left */}
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn} className="w-full md:w-2/5 flex justify-center">
            <div className="w-80 h-80">
              <img alt="TIME Université Logo" src="/lovable-uploads/f8293b4e-613e-4218-9cdb-96c2800c284a.png" className="w-full h-full object-contain" />
            </div>
          </motion.div>
          
          {/* Text content on the right */}
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn} className="w-full md:w-3/5">
            <div className="prose prose-lg text-gray-800 max-w-none prose-justified">
              <h3 className="text-2xl font-bold mb-4">Historique</h3>
              <p className="mb-4 text-justified">
                Fondée en 2002 par le Dr Mohamed Damak, TIME Université – École Supérieure Privée des
                Technologies de l'Information et de Management de l'Entreprise – s'est imposée comme un acteur
                clé de l'enseignement supérieur privé en Tunisie.
              </p>
              <p className="mb-4 text-justified">
                Agrée par l'État tunisien dès sa création, l'université a été pensée pour répondre à un besoin urgent :
                former des diplômés immédiatement opérationnels, capables de s'intégrer avec efficacité dans le
                monde professionnel.
              </p>
              <p className="mb-4 text-justified">
                Depuis plus de deux décennies, TIME Université poursuit son développement en s'appuyant sur une
                pédagogie innovante, des partenariats stratégiques avec le monde académique et l'entreprise, et
                une vision claire : connecter la formation à l'emploi.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutHistorySection;