import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import UniversityLogo from './UniversityLogo';
interface NavItemProps {
  title: string;
  submenu?: {
    title: string;
    url?: string;
    submenu?: {
      title: string;
      url?: string;
    }[];
  }[];
}
const MainNavigation: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation data structure
  const navItems: NavItemProps[] = [{
    title: 'home'
  }, {
    title: 'presentation',
    submenu: [{
      title: 'about-us',
      url: '/presentation#about-us'
    }, {
      title: 'notre-vision',
      url: '/presentation#notre-vision'
    }, {
      title: 'nos-valeurs',
      url: '/presentation#nos-valeurs'
    }, {
      title: 'why-choose-us',
      url: '/presentation#why-choose-us'
    }, {
      title: 'partners',
      url: '/presentation#partners'
    }, {
      title: 'visit',
      url: '/presentation#visit'
    }]
  }, {
    title: 'formation',
    submenu: [{
      title: 'license-cycle',
      url: '/formation/license',
      submenu: [{
        title: 'Informatique (Business Computing)',
        url: '/formation/license#informatique'
      }, {
        title: 'Finance',
        url: '/formation/license#finance'
      }, {
        title: 'Marketing',
        url: '/formation/license#marketing'
      }, {
        title: 'Comptabilité',
        url: '/formation/license#comptabilite'
      }, {
        title: 'Management',
        url: '/formation/license#management'
      }, {
        title: 'Gestion des Ressources Humaines',
        url: '/formation/license#ressources-humaines'
      }]
    }, {
      title: 'master-cycle',
      url: '/formation/master',
      submenu: [{
        title: 'Comptabilité',
        url: '/formation/master#comptabilite'
      }, {
        title: 'Finance',
        url: '/formation/master#finance'
      }, {
        title: 'Ingénierie Financière (IF)',
        url: '/formation/master#ingenierie-financiere'
      }, {
        title: 'Ingénierie de Logiciel (IL)',
        url: '/formation/master#ingenierie-logiciel'
      }, {
        title: 'Fiscalité',
        url: '/formation/master#fiscalite'
      }, {
        title: 'Sécurité des Systèmes Informatiques et des Réseaux (SSIR)',
        url: '/formation/master#securite-systemes'
      }, {
        title: 'Management des Ressources Humaines et Ingénierie des Compétences (MRHIC)',
        url: '/formation/master#management-rh'
      }, {
        title: 'Intelligence Économique et Stratégies Compétitives à l\'International (IESCI)',
        url: '/formation/master#intelligence-economique'
      }, {
        title: 'Contrôle de Gestion et Système d\'Information (CGSI)',
        url: '/formation/master#controle-gestion'
      }, {
        title: 'Management Opérationnel (MO), Chaîne Logistique et Achats',
        url: '/formation/master#management-operationnel'
      }, {
        title: 'Marketing et Force de Vente à l\'International (MFVI)',
        url: '/formation/master#marketing-force-vente'
      }]
    }, {
      title: 'prep-cycle',
      url: '/formation/prepa',
      submenu: [{
        title: '1ère année : Math-Physique-Informatique',
        url: '/formation/prepa#premiere-annee'
      }, {
        title: '2e année : Réseaux Informatiques et Télécom (RT)',
        url: '/formation/prepa#reseaux-telecom'
      }, {
        title: '2e année : Génie Logiciel (GL)',
        url: '/formation/prepa#genie-logiciel'
      }, {
        title: '2e année : Informatique Industrielle et Automatique (IIA)',
        url: '/formation/prepa#informatique-industrielle'
      }]
    }, {
      title: 'engineer-cycle',
      url: '/formation/ingenieur',
      submenu: [{
        title: 'Réseaux Informatiques et Télécom (RT)',
        url: '/formation/ingenieur#reseaux-telecom'
      }, {
        title: 'Génie Logiciel (GL)',
        url: '/formation/ingenieur#genie-logiciel'
      }, {
        title: 'Informatique Industrielle et Automatique (IIA)',
        url: '/formation/ingenieur#informatique-industrielle'
      }]
    }]
  }, {
    title: 'admission',
    submenu: [{
      title: 'admission-conditions',
      url: '/admission/conditions'
    }, {
      title: 'registration-request',
      url: '/admission/pre-inscription'
    }, {
      title: 'internship',
      url: '/admission/stages'
    }]
  }, {
    title: 'information',
     submenu: [
      /*{
      title: 'Actualité',
      url: '/information/actualite'
    }, */ {
      title: 'Services académiques',
      url: '/information/services-academiques',
      submenu: [{
        title: 'Règlement intérieur',
        url: '/information/services-academiques/reglement'
      }, {
        title: 'Annuaire',
        url: '/information/services-academiques/annuaire'
      }, {
        title: 'Frais académiques',
        url: '/information/services-academiques/frais'
      }, {
        title: 'Régime',
        url: '/information/services-academiques/regime'
      }, {
        title: 'Calendrier académique',
        url: '/information/services-academiques/calendrier'
      }]
    }, {
      title: 'Vie estudiantine',
      url: '/information/vie-estudiantine',
      submenu: [{
        title: 'Clubs',
        url: '/information/vie-estudiantine/clubs'
      }, {
        title: 'Vie après les cours',
        url: '/information/vie-estudiantine/apres-cours'
      }]
    }, {
      title: 'Étudiants internationaux',
      url: '/information/etudiants-internationaux'
    }]
  }];
  return <nav className="shadow-md h-[60px] flex items-center text-white bg-[#005794]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="rounded flex items-center px-0 bg-transparent">
            <UniversityLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => <div key={item.title} className="group relative px-2 py-1">
                {item.title === 'home' ? <Link to="/" className="text-white font-medium text-sm hover:text-time-orange transition-colors uppercase">
                    {t(item.title)}
                  </Link> : <Link to={item.submenu && item.submenu.length > 0 && item.submenu[0].url ? item.submenu[0].url.split('#')[0] : `/${item.title}`} className="text-white font-medium text-sm hover:text-time-orange transition-colors uppercase cursor-pointer">
                    {t(item.title)}
                  </Link>}
                
                {item.submenu && <div className="absolute left-0 mt-1 w-44 bg-white shadow-lg rounded-md z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="py-1">
                      {item.submenu.map(subItem => <div key={subItem.title} className="group/sub relative">
                          {subItem.url ? <Link to={subItem.url} className="block px-3 py-1.5 text-xs text-[#005ecd] hover:bg-[#005ecd] hover:text-white transition-colors">
                              {t(subItem.title)}
                            </Link> : <span className="block px-3 py-1.5 text-xs text-[#005ecd] hover:bg-[#005ecd] hover:text-white transition-colors">
                              {t(subItem.title)}
                            </span>}
                          
                          {subItem.submenu && <div className="absolute left-full top-0 mt-0 w-80 bg-white shadow-lg rounded-md z-50 invisible group-hover/sub:visible opacity-0 group-hover/sub:opacity-100 transition-all duration-300">
                              <div className="py-1">
                                {subItem.submenu.map(subSubItem => <Link key={subSubItem.title} to={subSubItem.url || '#'} className="block px-3 py-1.5 text-xs text-[#005ecd] hover:bg-[#005ecd] hover:text-white transition-colors">
                                    {subSubItem.title}
                                  </Link>)}
                              </div>
                            </div>}
                        </div>)}
                    </div>
                  </div>}
              </div>)}
          </div>

          {/* Login button */}
          <div>
            <a
              href="/admission/pre-inscription" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <Button size="sm" className="bg-time-orange hover:bg-time-orange/90 flex items-center gap-1 px-[24px] text-sm">
              {t('POSTULER')}
            </Button>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("fixed inset-y-0 right-0 z-50 w-full bg-white transform ease-in-out transition-all duration-300 shadow-xl lg:hidden", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="p-3 flex justify-between items-center border-b">
            <div className="bg-white rounded">
              <UniversityLogo />
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-[#005ecd]">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Mobile menu items */}
          <div className="p-3">
            <ul className="space-y-3">
              {navItems.map(item => <li key={item.title} className="py-0.5">
                  {item.title === 'home' ? <Link to="/" className="text-[#005ecd] text-sm font-medium block py-1.5 uppercase" onClick={() => setMobileMenuOpen(false)}>
                      {t(item.title)}
                    </Link> : <Link to={item.submenu && item.submenu.length > 0 && item.submenu[0].url ? item.submenu[0].url.split('#')[0] : `/${item.title}`} className="text-[#005ecd] text-sm font-medium block py-1.5 uppercase" onClick={() => setMobileMenuOpen(false)}>
                      {t(item.title)}
                    </Link>}
                  
                  {item.submenu && <ul className="pl-3 space-y-0.5 mt-1">
                      {item.submenu.map(subItem => <li key={subItem.title}>
                          {subItem.url ? <Link to={subItem.url} className="text-[#005ecd] block py-1 text-xs" onClick={() => setMobileMenuOpen(false)}>
                              {t(subItem.title)}
                            </Link> : <span className="text-[#005ecd] block py-1 text-xs">
                              {t(subItem.title)}
                            </span>}
                          
                          {subItem.submenu && <ul className="pl-3 space-y-0.5 mt-1">
                              {subItem.submenu.map(subSubItem => <li key={subSubItem.title}>
                                  <Link to={subSubItem.url || '#'} className="text-gray-600 block py-0.5 text-xs" onClick={() => setMobileMenuOpen(false)}>
                                    {subSubItem.title}
                                  </Link>
                                </li>)}
                            </ul>}
                        </li>)}
                    </ul>}
                </li>)}
            </ul>
          </div>
          
          <div className="mt-auto p-3 border-t">
            <Button size="sm" className="bg-time-orange hover:bg-time-orange/90 w-full flex items-center justify-center gap-1 text-xs">
              {t('Postulate')}
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default MainNavigation;