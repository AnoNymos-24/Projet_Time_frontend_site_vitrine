import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer: React.FC = () => {
  const {
    t
  } = useLanguage();
  const year = new Date().getFullYear();
  const handleAddressClick = () => {
    // Ouvrir Google Maps avec l'adresse
    const address = "45 Avenue Mohamed V-1002 Montplaisir, Tunis, Tunisia";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };
  const handlePhoneClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:admissions@time.ens.tn';
  };
  return <footer className="bg-time-blue-3 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* University Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="rounded p-1 mr-2 px-0 py-0 bg-transparent">
                <img alt="TIME University Logo" src="/lovable-uploads/95ec7022-bd47-4df4-83fe-0d82ab230054.png" className="h-14" />
              </div>
              <span className="font-medium text-base"></span>
            </div>
            <p className="text-white/80 mb-4">
              L'Université TIME s'engage à offrir une éducation de qualité et à préparer les étudiants à réussir dans un monde en constante évolution.
            </p>
          </div>
          
          {/* University Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Université TIME</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/presentation" className="text-white/80 hover:text-white transition-colors">
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link to="/formation" className="text-white/80 hover:text-white transition-colors">
                  Nos cycles de formation
                </Link>
              </li>
              <li>
                <Link to="/admission/conditions" className="text-white/80 hover:text-white transition-colors">
                  Pré-inscription
                </Link>
              </li>
              <li>
                <Link to="/admission/conditions" className="text-white/80 hover:text-white transition-colors">
                  Admission
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
{/*               <li>
                <Link to="/information/actualite" className="text-white/80 hover:text-white transition-colors">
                  Actualités
                </Link>
              </li> 
              <li>
                <Link to="/information/evenements" className="text-white/80 hover:text-white transition-colors">
                  Évènements
                </Link>
              </li> */}
              <li>
                <Link to="/information/services-academiques" className="text-white/80 hover:text-white transition-colors">
                  Calendrier académique
                </Link>
              </li>
              <li>
                <Link to="/information/services-academiques" className="text-white/80 hover:text-white transition-colors">
                  Annuaire
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-white/80">
              <p className="mb-2 cursor-pointer hover:text-white transition-colors" onClick={handleAddressClick} title="Ouvrir dans Google Maps">
                45. Avenue Mohamed V-1002 Montplaisir
              </p>
              <p className="mb-2 cursor-pointer hover:text-white transition-colors" onClick={handleAddressClick} title="Ouvrir dans Google Maps">
                Tunis-Tunisie
              </p>
              <p className="mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handlePhoneClick('+21671951194')} title="Appeler ce numéro">
                +216 71 951 194
              </p>
              <p className="mb-2 cursor-pointer hover:text-white transition-colors" onClick={handleEmailClick} title="Envoyer un email">
                admissions@time.ens.tn
              </p>
            </address>
            
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/TimeTunisia/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-time-orange transition-colors" title="Suivez-nous sur Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/school/time-université" target="_blank" rel="noopener noreferrer" className="text-white hover:text-time-orange transition-colors" title="Suivez-nous sur LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/timeuniversite/?igsh=MXc0enVxdHE4N2p5dA%3D%3D#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-time-orange transition-colors" title="Suivez-nous sur Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {year} Université TIME. Tous droits réservés.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/information/mentions-legales" className="text-white/60 hover:text-white transition-colors text-sm">
              Mentions légales
            </Link>
            <Link to="/information/politique-confidentialite" className="text-white/60 hover:text-white transition-colors text-sm">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;