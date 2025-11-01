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
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}
const ValuesHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle
}) => {
  return <motion.div initial="hidden" whileInView="visible" viewport={{
    once: true,
    margin: "-100px"
  }} variants={fadeIn} className="mb-6 text-center">
      <h2 className="font-bold text-time-blue-1 mb-2 text-2xl">{title}</h2>
      <div className="w-16 h-1 bg-time-orange mx-auto mb-2"></div>
      {subtitle && <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          {subtitle}
        </p>}
    </motion.div>;
};
export default ValuesHeader;