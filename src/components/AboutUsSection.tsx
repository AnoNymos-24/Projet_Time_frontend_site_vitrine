import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const AboutUsSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  return <section className="section-container max-w-6xl rounded-lg mx-auto bg-blue-300">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Logo on the left */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="w-64 h-64">
              <img alt="TIME Université Logo" className="w-full h-full object-contain" src="/lovable-uploads/2d8f2294-fc4f-4a39-9c22-03c6a6cf25cd.png" />
            </div>
          </div>
          
          {/* Text content on the right */}
          <div className="w-full md:w-3/5">
            <div className="prose prose-lg text-gray-800 max-w-none prose-justified">
              <p className="font-bold text-xl mb-2">TIME UNIVERSITÉ</p>
              <p className="mb-4 text-justified">
                est la dénomination sociale de l'Ecole Supérieure Privée des Technologies de l'information et de Management de l'Entreprise (TIME ESP/TIME Private Higher School), agréée par l'État Tunisien depuis 2002 en application du cadre de loi relatif à l'enseignement supérieur, mise en vigueur en Tunisie à partir d'octobre 2001.
              </p>
              
              <p className="mb-4 text-justified">Depuis sa création, notre université s'est donnée pour mission de former des professionnels compétents, innovants et responsables, capab</p>
            </div>
          </div>
        </div>
        
        {/* Add "Voir Plus" button at the bottom right */}
        <div className="flex justify-end mt-6">
          <Button asChild variant="outline" className="bg-white text-black border border-gray-300 hover:bg-gray-100 hover:text-black" size="sm">
            <Link to="/presentation" className="mx-[51px] my-0 py-[18px] px-[14px]">
              {t('learn-more')}
            </Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default AboutUsSection;