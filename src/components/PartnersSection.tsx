
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Updated partner logos with the correct paths
const partnerLogos = [
  {
    name: 'SOMOCER',
    logo: '/img/a486072e-01fa-4f6f-a65e-491436169856.png',
    url: '#'
  },
  {
    name: 'SAWARBY',
    logo: '/img/22a64e8d-f177-4425-9a77-20a635106ea8.png',
    url: '#'
  },
  {
    name: 'TMI',
    logo: '/img/1fe7c4e2-52be-4767-809a-2b87ed3d89d5.png',
    url: '#'
  },
  {
    name: 'Golden Yasmin Hotels',
    logo: '/img/e47a25c1-e6da-4b86-b18d-12b811cea59f.png',
    url: '#'
  },
  {
    name: 'SLAMA Group',
    logo: '/img/8acc8315-8958-4827-ae5c-f98a0308be3e.png',
    url: '#'
  },
  {
    name: 'BFI',
    logo: '/img/b437e44d-cd6f-4a64-bc2c-917964e14d27.png',
    url: '#'
  }
];

const PartnersSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="flex justify-center rounded-md">
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <Card className="overflow-hidden border shadow-sm transition-all duration-200 hover:shadow-md w-[300px]">
                  <CardContent className="p-6">
                    <AspectRatio ratio={3 / 2}>
                      <div className="flex h-full w-full items-center justify-center bg-white">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`} 
                          className="max-h-24 max-w-48 object-contain" 
                        />
                      </div>
                    </AspectRatio>
                  </CardContent>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
