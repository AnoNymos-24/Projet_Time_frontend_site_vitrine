
import React from 'react';
import Layout from '@/components/Layout';
import EventCard from '@/components/articles/EventCard';
import { events } from '@/data/events';

const Evenements: React.FC = () => {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-time-blue-1 mb-8">Événements</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        {events.length === 0 && (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Aucun événement à venir</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Evenements;
