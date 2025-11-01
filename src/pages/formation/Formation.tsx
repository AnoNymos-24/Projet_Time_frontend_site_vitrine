
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const formationCycles = [
  {
    title: 'license-cycle',
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    description: 'Formez-vous aux fondamentaux de votre discipline et préparez votre carrière avec notre cycle licence.',
    url: '/formation/license',
    color: 'from-purple-500 to-indigo-600',
    hoverColor: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-700',
    borderColor: 'border-purple-300',
    iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600'
  },
  {
    title: 'master-cycle',
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    description: 'Perfectionnez vos compétences et devenez un expert dans votre domaine avec nos masters spécialisés.',
    url: '/formation/master',
    color: 'from-blue-500 to-cyan-500',
    hoverColor: 'hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600',
    borderColor: 'border-blue-300',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  {
    title: 'prep-cycle',
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    description: 'Préparez-vous aux études d\'ingénieur avec notre cycle préparatoire intensif et performant.',
    url: '/formation/prepa',
    color: 'from-teal-500 to-emerald-500',
    hoverColor: 'hover:bg-gradient-to-br hover:from-teal-600 hover:to-emerald-600',
    borderColor: 'border-teal-300',
    iconBg: 'bg-gradient-to-br from-teal-500 to-emerald-500'
  },
  {
    title: 'engineer-cycle',
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    description: 'Maîtrisez les technologies de pointe et développez votre expertise technique avec notre formation d\'ingénieur.',
    url: '/formation/ingenieur',
    color: 'from-orange-500 to-amber-500',
    hoverColor: 'hover:bg-gradient-to-br hover:from-orange-600 hover:to-amber-600',
    borderColor: 'border-orange-300',
    iconBg: 'bg-gradient-to-br from-orange-500 to-amber-500'
  }
];

const Formation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-time-blue-1 mb-4">
              Nos cycles de formation
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-time-blue-1 to-time-blue-2 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Découvrez nos cycles de formation conçus pour répondre aux besoins du marché du travail et vous préparer à une carrière réussie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {formationCycles.map((cycle) => (
              <div key={cycle.title} className={`relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${cycle.hoverColor} cursor-pointer border ${cycle.borderColor}`}>
                <Link to={cycle.url} className="h-full block">
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
                      <CardDescription className="text-center text-gray-700 text-base">
                        {cycle.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardFooter className="pt-0 flex justify-center pb-6">
                      <Button 
                        className={`w-full bg-gradient-to-r ${cycle.color} text-white hover:shadow-lg transition-all`}
                      >
                        Découvrir
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Hover Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Formation;
