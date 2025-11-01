import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
export interface EventData {
  id: string;
  title: string;
  date: string;
  targetAudience: string;
  description: string;
  image?: string;
  slug: string;
  requiresRegistration?: boolean;
  calendarLink?: string;
}
interface EventCardProps {
  event: EventData;
  variant?: 'normal' | 'compact';
}
const EventCard: React.FC<EventCardProps> = ({
  event,
  variant = 'normal'
}) => {
  if (variant === 'compact') {
    return <Link to={`/information/evenements/${event.slug}`} className="block">
        <Card className="transition-all hover:bg-gray-50">
          <CardContent className="p-3">
            <div className="flex items-center gap-3">
              <div className="bg-time-blue-1 text-white p-2 h-14 w-14 rounded flex flex-col items-center justify-center text-xs bg-orange-400">
                <span className="font-bold">{event.date.split(' ')[0]}</span>
                <span>{event.date.split(' ')[1]}</span>
              </div>
              <div>
                <h4 className="font-medium line-clamp-1">{event.title}</h4>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Users className="h-3 w-3 mr-1" />
                  {event.targetAudience}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>;
  }
  return <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-md">
      {event.image && <div className="aspect-video overflow-hidden">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
        </div>}
      <CardContent className="flex-grow p-4">
        <div className="flex items-center text-sm text-time-blue-1 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          {event.date}
        </div>
        <Link to={`/information/evenements/${event.slug}`}>
          <h3 className="font-bold text-xl mb-2 line-clamp-2 hover:text-time-blue-1 transition-colors">
            {event.title}
          </h3>
        </Link>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Users className="h-4 w-4 mr-1" />
          {event.targetAudience}
        </div>
        <p className="text-gray-600 line-clamp-3">{event.description}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/information/evenements/${event.slug}`} className="w-full text-center py-2 border border-time-blue-1 rounded text-time-blue-1 hover:bg-time-blue-1 hover:text-white transition-colors">
          En savoir plus
        </Link>
      </CardFooter>
    </Card>;
};
export default EventCard;