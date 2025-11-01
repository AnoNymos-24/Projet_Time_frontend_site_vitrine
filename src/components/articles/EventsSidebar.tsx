import React from 'react';
import { EventData } from './EventCard';
import EventCard from './EventCard';
interface EventsSidebarProps {
  events: EventData[];
}
const EventsSidebar: React.FC<EventsSidebarProps> = ({
  events
}) => {
  return <div className="border-l pl-4 space-y-4">
      <h3 className="text-xl font-bold mb-6 text-time-blue-1 text-orange-500">Événements à venir</h3>
      <div className="space-y-3">
        {events.map(event => <EventCard key={event.id} event={event} variant="compact" />)}
      </div>
    </div>;
};
export default EventsSidebar;