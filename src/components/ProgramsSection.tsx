import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { useNavigate } from 'react-router-dom';

const formationCycles = [
  {
    title: 'license-cycle',
    url: '/formation/license',
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    description: 'Formez-vous aux fondamentaux de votre discipline et préparez votre carrière avec notre cycle licence.',
    fields: ['Informatique (Business Computing)', 'Finance', 'Marketing', 'Comptabilité', 'Management', 'Gestion des Ressources Humaines'],
    color: 'from-purple-500 to-indigo-600',
    hoverColor: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-700',
    borderColor: 'border-purple-300',
    iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600'
  },
  {
    title: 'master-cycle',
    url: '/formation/master',
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    description: 'Perfectionnez vos compétences et devenez un expert dans votre domaine avec nos masters spécialisés.',
    fields: [
      'Comptabilité', 
      'Finance', 
      'Ingénierie Financière (IF)', 
      'Ingénierie de Logiciel (IL)', 
      'Fiscalité',
      'Sécurité des Systèmes Informatiques et des Réseaux (SSIR)',
      'Management des Ressources Humaines et Ingénierie des Compétences (MRHIC)',
      'Intelligence Économique et Stratégies Compétitives à l\'International (IESCI)',
      'Contrôle de Gestion et Système d\'Information (CGSI)',
      'Management Opérationnel (MO), Chaîne Logistique et Achats',
      'Marketing et Force de Vente à l\'International (MFVI)'
    ],
    color: 'from-blue-500 to-cyan-500',
    hoverColor: 'hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600',
    borderColor: 'border-blue-300',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  {
    title: 'Cycle Préparatoire',
    url: '/formation/prepa',
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    description: 'Préparez-vous aux études d\'ingénieur avec notre cycle préparatoire intégré et intensif, Grâce à une approche méthodique.',
    fields: [
      'Réseaux Informatiques et Télécom (RIT)', 
      'Génie Logiciel (GL)', 
      'Informatique Industrielle et Automatique (IIA)'
    ],
    color: 'from-teal-500 to-emerald-500',
    hoverColor: 'hover:bg-gradient-to-br hover:from-teal-600 hover:to-emerald-600',
    borderColor: 'border-teal-300',
    iconBg: 'bg-gradient-to-br from-teal-500 to-emerald-500'
  },
  {
    title: 'engineer-cycle',
    url: '/formation/ingenieur',
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    description: 'Maîtrisez les technologies de pointe et développez votre expertise technique avec notre formation d\'ingénieur.',
    fields: ['Réseaux Informatiques et Télécom (RIT)', 'Génie Logiciel (GL)', 'Informatique Industrielle et Automatique (IIA)'],
    color: 'from-orange-500 to-amber-500',
    hoverColor: 'hover:bg-gradient-to-br hover:from-orange-600 hover:to-amber-600',
    borderColor: 'border-orange-300',
    iconBg: 'bg-gradient-to-br from-orange-500 to-amber-500'
  }
];

const ProgramsSection: React.FC = () => {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState<any>(null);
  const navigate = useNavigate();

  const handleCycleClick = (cycle: any) => {
    setSelectedCycle(cycle);
    setDialogOpen(true);
  };

  const handleNavigateToCycle = (url: string) => {
    navigate(url);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-time-blue-1 mb-4">
            Nos cycles de formation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-time-blue-1 to-time-blue-2 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Découvrez nos cycles de formation conçus pour répondre aux besoins du marché du travail et vous préparer à une carrière réussie.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {formationCycles.map((cycle) => (
            <HoverCard key={cycle.title}>
              <HoverCardTrigger asChild>
                <div 
                  className={`relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${cycle.hoverColor} cursor-pointer border ${cycle.borderColor}`}
                  onClick={() => handleNavigateToCycle(cycle.url)}
                >
                  <div className="h-full">
                    <Card className="border-0 shadow-none h-full bg-white overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${cycle.color}`}></div>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col items-center gap-4 mb-2">
                          <div className={`p-4 rounded-full ${cycle.iconBg} shadow-lg`}>
                            {cycle.icon}
                          </div>
                          <CardTitle className="text-2xl font-bold text-center">
                            {t(cycle.title)}
                          </CardTitle>
                        </div>






                        <div>
                        <CardDescription className="text-center text-gray-700 text-base">
                          {cycle.description}
                        </CardDescription>
                        </div>

                      </CardHeader>
                      
                      <CardContent className="flex-grow">
                        {/* Removed fields display section */}
                      </CardContent>
                      
                      <CardFooter className="pt-0 flex justify-center pb-6">
                        <Button 
                          className={`w-full bg-gradient-to-r ${cycle.color} text-white hover:shadow-lg transition-all`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCycleClick(cycle);
                          }}
                        >
                          En savoir plus
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                  
                  {/* Hover Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </HoverCardTrigger>
              
              <HoverCardContent className="w-80 p-0 border-0 shadow-xl">
                <div className={`p-4 bg-gradient-to-r ${cycle.color} text-white`}>
                  <h3 className="text-lg font-bold">{t(cycle.title)}</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-3">{cycle.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Principales filières:</h4>
                    <ul className="text-xs space-y-1">
                      {cycle.fields.slice(0, 4).map((field) => (
                        <li key={field} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cycle.color} mr-2`}></div>
                          {field}
                        </li>
                      ))}
                      {cycle.fields.length > 4 && (
                        <li className="text-gray-500">+ {cycle.fields.length - 4} autres filières</li>
                      )}
                    </ul>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className={`inline-flex items-center justify-center p-3 rounded-full ${selectedCycle?.iconBg} mb-4`}>
              {selectedCycle?.icon}
            </div>
            <DialogTitle className="text-2xl">{t(selectedCycle?.title || '')}</DialogTitle>
            <DialogDescription className="text-base">{selectedCycle?.description}</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <h4 className="font-medium text-lg">Nos filières:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {selectedCycle?.fields.map((field: string) => (
                <div 
                  key={field} 
                  className={`flex items-center p-3 rounded-md bg-gradient-to-r ${selectedCycle?.color} bg-opacity-10`}
                >
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedCycle?.color} mr-2`}></div>
                  <span className="text-sm">{field}</span>
                </div>
              ))}
            </div>
            
            <div className="prose prose-sm max-w-none mt-6">
              <p>
                Pour plus d'informations sur ce cycle de formation et les conditions d'admission,
                n'hésitez pas à nous contacter ou à consulter notre brochure détaillée.
              </p>
            </div>
            
            <div className="flex justify-between mt-4">
              <Button 
                className={`bg-gradient-to-r ${selectedCycle?.color} text-white`}
                onClick={() => {
                  setDialogOpen(false);
                  if (selectedCycle?.url) {
                    navigate(selectedCycle.url);
                  }
                }}
              >
                Voir le cycle complet
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => setDialogOpen(false)}
              >
                Fermer
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProgramsSection;
