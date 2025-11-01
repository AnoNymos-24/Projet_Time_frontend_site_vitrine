import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface PreRegistrationLayoutProps {
  children: React.ReactNode;
}

const PreRegistrationLayout: React.FC<PreRegistrationLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-time-blue-1 via-time-blue-2 to-time-blue-3 flex flex-col">
      {/* Custom Header */}
      <header className="bg-time-blue-1/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-white hover:bg-white/10 hover:text-white border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Retour au site
              </Button>
            </div>
            
            <div className="text-center">
              <h1 className="text-xl font-bold text-white">Université TIME</h1>
              <p className="text-sm text-blue-100">Technologie, Innovation, Management, Entrepreneuriat</p>
            </div>
            
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Custom Footer */}
      <footer className="bg-time-blue-1/95 backdrop-blur-sm border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-blue-100 text-sm">
              © 2024 Université TIME. Tous droits réservés.
            </p>
            <p className="text-blue-200 text-xs mt-1">
              Besoin d'aide ? Contactez-nous au (+216) 71 95 11 94
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PreRegistrationLayout;