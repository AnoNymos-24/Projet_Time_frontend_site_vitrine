import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<string, Record<Language, string>> = {
  'search': {
    fr: 'Rechercher',
    ar: 'بحث'
  },
  'subscribe': {
    fr: 'S\'abonner',
    ar: 'اشترك'
  },
  'newsletter': {
    fr: 'Bulletin d\'information',
    ar: 'النشرة الإخبارية'
  },
  'email': {
    fr: 'Votre email',
    ar: 'بريدك الإلكتروني'
  },
  'home': {
    fr: 'Accueil',
    ar: 'الرئيسية'
  },
  'presentation': {
    fr: 'Présentation',
    ar: 'تقديم'
  },
  'formation': {
    fr: 'Formation',
    ar: 'تكوين'
  },
  'admission': {
    fr: 'Admission',
    ar: 'قبول'
  },
  'information': {
    fr: 'Information',
    ar: 'معلومات'
  },
  'pre-registration': {
    fr: 'Pré-inscription',
    ar: 'التسجيل المسبق'
  },
  'about-us': {
    fr: 'Qui sommes-nous',
    ar: 'من نحن'
  },
  'partners': {
    fr: 'Nos partenaires',
    ar: 'شركاؤنا'
  },
  'why-choose-us': {
    fr: 'Pourquoi nous choisir',
    ar: 'لماذا تختارنا'
  },
  'visit': {
    fr: 'Visiter',
    ar: 'زيارة'
  },
  'license-cycle': {
    fr: 'Cycle Licence LMD',
    ar: 'دورة الإجازة'
  },
  'master-cycle': {
    fr: 'Cycle Master LMD',
    ar: 'دورة الماستر'
  },
  'prep-cycle': {
    fr: 'Cycle Prépas',
    ar: 'دورة تحضيرية'
  },
  'engineer-cycle': {
    fr: 'Cycle Ingénieur',
    ar: 'دورة مهندس'
  },
  'welcome': {
    fr: 'Bienvenue à l\'Université TIME',
    ar: 'مرحبًا بكم في جامعة TIME'
  },
  'admission-conditions': {
    fr: 'Conditions d\'admission',
    ar: 'شروط القبول'
  },
  'registration-request': {
    fr: 'Demande d\'inscription',
    ar: 'طلب التسجيل'
  },
  'internship': {
    fr: 'Stage',
    ar: 'تدريب'
  },
  'news': {
    fr: 'Actualité',
    ar: 'أخبار'
  },
  'events': {
    fr: 'Évènements',
    ar: 'أحداث'
  },
  'academic-calendar': {
    fr: 'Calendrier académique',
    ar: 'التقويم الأكاديمي'
  },
  'directory': {
    fr: 'Annuaire',
    ar: 'دليل'
  },
  'excellence': {
    fr: 'Excellence académique',
    ar: 'التميز الأكاديمي'
  },
  'discover': {
    fr: 'Découvrir',
    ar: 'اكتشف'
  },
  'learn-more': {
    fr: 'En savoir plus',
    ar: 'اقرأ المزيد'
  },
  'contact-us': {
    fr: 'Contactez-nous',
    ar: 'اتصل بنا'
  },
  'our-programs': {
    fr: 'Nos programmes',
    ar: 'برامجنا'
  },
  'login': {
    fr: 'Connexion',
    ar: 'تسجيل الدخول'
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
