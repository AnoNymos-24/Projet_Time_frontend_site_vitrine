
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    number: '25+',
    label: 'Années d\'expérience',
    icon: '📚'
  },
  {
    number: '5,000+',
    label: 'Étudiants',
    icon: '👨‍🎓'
  },
  {
    number: '200+',
    label: 'Professeurs qualifiés',
    icon: '👩‍🏫'
  },
  {
    number: '98%',
    label: 'Taux d\'insertion professionnelle',
    icon: '📈'
  }
];

const StatisticsSection: React.FC = () => {
  return (
    <section className="bg-time-blue-1 text-white py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">L'Université TIME en chiffres</h2>
          <p className="max-w-2xl mx-auto text-white/80 text-justified">
            Des résultats qui témoignent de notre engagement envers l'excellence académique et la réussite professionnelle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-time-blue-2 border-none text-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 text-justified">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
