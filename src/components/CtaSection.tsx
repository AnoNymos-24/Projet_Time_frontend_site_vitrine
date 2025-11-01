
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { url } from 'inspector';

const CtaSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-time-blue-1 to-time-blue-2 text-white py-10">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-3">Prêt à commencer votre parcours académique ?</h2>
            <p className="text-lg text-white/80">
              Rejoignez l'Université TIME et investissez dans votre avenir dès aujourd'hui. Nos sessions d'admission sont ouvertes.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
          <a
             href="/admission/pre-inscription" 
              target="_blank" 
              rel="noopener noreferrer"
          >
            <Button  size="sm" className="bg-time-orange hover:bg-time-orange/90 flex items-center gap-1">
              {t('pre-registration')}
              <ArrowRight className="h-3 w-3" />
            </Button>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
