import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import api from '@/api';

interface VisitScheduleModalProps {
  children: React.ReactNode;
}

const VisitScheduleModal: React.FC<VisitScheduleModalProps> = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    visitDate: undefined as Date | undefined,
    timeSlot: '',
    message: ''
  });

  const timeSlots = [
    '09:00 - 10:00',
    '10:00 - 11:00', 
    '11:00 - 12:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00'
  ];











const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const payload = {
      ...formData,
      visitDate: formData.visitDate ? formData.visitDate.toISOString().split('T')[0] : null
    };

    const res = await api.post('/visit-request', payload);

    if (res.status === 200 || res.status === 201) {
      alert('✅ Votre demande de visite a été envoyée avec succès !');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        visitDate: undefined,
        timeSlot: '',
        message: ''
      });
    }
  } catch (error) {
    console.error(error);
    alert('❌ Erreur lors de l\'envoi de la demande de visite.');
  }
};











  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-time-blue-1">Programmer une visite</DialogTitle>
          <DialogDescription>
            Planifiez votre visite de notre campus.
          </DialogDescription>
          {/* Date et heure actuelles */}
          <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded mt-2">
            {new Date().toLocaleDateString('fr-FR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} - {new Date().toLocaleTimeString('fr-FR', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="firstName" className="text-sm">Prénom *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="h-9"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="lastName" className="text-sm">Nom *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="h-9"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-sm">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="h-9"
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone" className="text-sm">Téléphone *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="h-9"
              required
            />
          </div>

          <div className="space-y-1">
            <Label className="text-sm">Date de visite *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-9",
                    !formData.visitDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.visitDate ? format(formData.visitDate, "PPP") : "Sélectionner une date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.visitDate}
                  onSelect={(date) => setFormData({...formData, visitDate: date})}
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  initialFocus
                  className="p-3"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-1">
            <Label className="text-sm">Créneau horaire *</Label>
            <div className="grid grid-cols-3 gap-1">
              {timeSlots.map((slot) => (
                <Button
                  key={slot}
                  type="button"
                  variant={formData.timeSlot === slot ? "default" : "outline"}
                  className={`text-xs h-8 ${formData.timeSlot === slot ? 'bg-time-blue-1 hover:bg-time-blue-2' : ''}`}
                  onClick={() => setFormData({...formData, timeSlot: slot})}
                >
                  {slot}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="message" className="text-sm">Message (optionnel)</Label>
            <Textarea
              id="message"
              placeholder="Questions particulières..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={2}
              className="text-sm"
            />
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-time-blue-1 to-time-blue-2 hover:from-time-blue-2 hover:to-time-blue-3 h-10">
            Programmer la visite
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VisitScheduleModal;