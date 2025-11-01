
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const news = [
  {
    id: 1,
    title: 'Nouvelle formation en intelligence artificielle',
    date: '12 Mai 2025',
    excerpt: 'L\'Université TIME lance une nouvelle formation spécialisée en intelligence artificielle pour répondre aux besoins du marché...',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=400&q=80'
  },
  {
    id: 2,
    title: 'Partenariat avec Microsoft pour l\'innovation technologique',
    date: '28 Avril 2025',
    excerpt: 'Un nouveau partenariat avec Microsoft permettra à nos étudiants d\'accéder à des ressources technologiques exclusives...',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=400&q=80'
  },
  {
    id: 3,
    title: 'Conférence internationale sur la cybersécurité',
    date: '15 Avril 2025',
    excerpt: 'L\'Université TIME organise une conférence internationale sur les dernières tendances en cybersécurité avec des experts du monde entier...',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=400&q=80'
  }
];

const events = [
  {
    id: 1,
    title: 'Journée portes ouvertes',
    date: '20 Mai 2025',
    time: '10:00 - 17:00',
    location: 'Campus principal',
    excerpt: 'Venez découvrir notre campus, rencontrer nos enseignants et en apprendre plus sur nos programmes...'
  },
  {
    id: 2,
    title: 'Séminaire sur l\'entrepreneuriat',
    date: '5 Juin 2025',
    time: '14:00 - 18:00',
    location: 'Amphithéâtre central',
    excerpt: 'Un séminaire pratique pour développer votre esprit entrepreneurial et acquérir les compétences nécessaires pour lancer votre startup...'
  },
  {
    id: 3,
    title: 'Forum des métiers du numérique',
    date: '12 Juin 2025',
    time: '9:00 - 16:00',
    location: 'Espace d\'exposition',
    excerpt: 'Rencontrez des professionnels du secteur numérique et découvrez les opportunités de carrière dans ce domaine en pleine expansion...'
  }
];

const NewsEventsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-time-blue-1 mb-4">Actualités & Évènements</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Restez informé des dernières nouvelles et des événements à venir à l'Université TIME
        </p>
      </div>
      
      <Tabs defaultValue="news" className="w-full">
        <TabsList className="mx-auto flex justify-center mb-6">
          <TabsTrigger value="news" className="text-lg px-6">{t('news')}</TabsTrigger>
          <TabsTrigger value="events" className="text-lg px-6">{t('events')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="news" className="mt-2">
          <div className="space-y-8">
            {news.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div 
                    className="w-full md:w-1/3 h-60 md:h-auto bg-cover bg-center cursor-pointer" 
                    style={{ backgroundImage: `url(${item.image})` }}
                    onClick={() => console.log(`Clicked on news item: ${item.title}`)}
                  ></div>
                  <div className="w-full md:w-2/3">
                    <CardHeader>
                      <div className="text-time-orange text-sm mb-1">{item.date}</div>
                      <CardTitle className="text-time-blue-1">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="text-time-orange p-0 hover:text-time-blue-1">
                        {t('learn-more')} →
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="events" className="mt-2">
          <div className="space-y-6">
            {events.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-time-orange text-sm mb-1">{event.date} | {event.time}</div>
                      <CardTitle className="text-time-blue-1">{event.title}</CardTitle>
                      <div className="text-gray-500 text-sm mt-1">{event.location}</div>
                    </div>
                    <div className="bg-time-blue-1/10 text-time-blue-1 font-semibold px-4 py-2 rounded">
                      {event.date.split(' ')[0]}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{event.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="border-time-orange text-time-orange hover:bg-time-orange hover:text-white">
                    {t('learn-more')}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default NewsEventsSection;
