import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
const HeroSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  return <div className="relative bg-time-blue-1 text-white overflow-hidden h-[680px] flex items-center">
      <div className="absolute inset-0 z-0 opacity-50 bg-black" style={{
      backgroundImage: "url('/img/8d1fbfba-6965-486a-a279-3146ebde141f.png')",
      backgroundSize: 'auto',
      backgroundPosition: "center"
    }}></div>
      
      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('welcome')}</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6 text-justified text-center">
          Une institution académique d'excellence pour la réussite de votre avenir professionnel
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="/presentation">
          <Button size="sm" className="bg-time-orange hover:bg-time-orange/90 my-0 px-[20px] py-[20px]">
            Nous découvrir
          </Button>
          </a>
        </div>
      </div>
    </div>;
};
export default HeroSection;