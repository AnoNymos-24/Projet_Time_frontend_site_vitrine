
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { getEventBySlug, getEventContent } from '@/data/events';

const EventDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getEventBySlug(slug) : undefined;
  
  // If event not found, redirect to events page
  if (!event) {
    return <Navigate to="/information/evenements" replace />;
  }

  const content = getEventContent(slug);

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-8 px-4">
        {event.image && (
          <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm mb-6">
            <div className="flex items-center text-time-blue-1">
              <Calendar className="h-5 w-5 mr-2" />
              {event.date}
            </div>
            <div className="flex items-center text-gray-700">
              <Users className="h-5 w-5 mr-2" />
              {event.targetAudience}
            </div>
          </div>
        </div>
        
        <div 
          className="prose max-w-none mb-8" 
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
        <div className="flex justify-center mt-8 mb-4">
          {event.requiresRegistration ? (
            <Button className="bg-time-orange hover:bg-time-orange/90 flex items-center gap-2">
              S'inscrire à l'événement
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : event.calendarLink ? (
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link to={event.calendarLink}>
                Voir sur le calendrier
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : null}
        </div>
        
        <div className="mt-8 pt-6 border-t text-center">
          <Link 
            to="/information/evenements" 
            className="text-time-blue-1 hover:underline"
          >
            Retour à la liste des événements
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
