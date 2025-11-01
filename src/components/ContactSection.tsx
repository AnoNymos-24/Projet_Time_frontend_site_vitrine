
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';
import { contactData } from '@/types';
import api from '@/api';
const ContactSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
    const handleAddressClick = () => {
    // Ouvrir Google Maps avec l'adresse
    const address = "45 Avenue Mohamed V-1002 Montplaisir, Tunis, Tunisia";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };



  const [form, setForm]= useState<contactData>({  name: '',
    email: '',
    subject: '',
    message: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setForm({ ...form, [e.target.id]: e.target.value });
};

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await api.post('/contact', form);
    if (res.status === 200) {
      alert('✅ Message envoyé avec succès');
      setForm({ name: '', email: '', subject: '', message: '' });
      setIsContactDialogOpen(false);
    }
  } catch (error) {
    console.error(error);
    alert('❌ Erreur lors de l\'envoi du message');
  }
};




  
  return <section className="py-16 text-white relative bg-cover bg-center" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/28b98c57-a173-4a72-b9ff-be2e9455d2bc.png')`,
    backgroundAttachment: 'fixed'
  }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contacts</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Contact information with icons */}
            <div className="bg-time-blue-1 p-8 rounded-xl mx-auto max-w-sm bg-[#1040b3]/[0.83]">
              <div className="space-y-10">
                {/* Phone numbers */}
                <div className="flex items-start space-x-5">
                  <div className="mt-1">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <a href="tel:+21671951194" className="text-sm font-medium text-white hover:underline block">(+216) 71 951 194</a>
                    <a href="tel:+21698763559" className="font-medium text-sm text-white hover:underline block">(+216) 98 763 559</a>
                    <a href="tel:+21655555880" className="font-medium text-sm text-white hover:underline block">(+216) 55 555 880</a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-5">
                  <div className="mt-1">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <a href="mailto:admissions@time.ens.tn" className="text-sm font-medium text-white hover:underline">
                      admissions@time.ens.tn
                    </a>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start space-x-5">
                  <div className="mt-1 cursor-pointer" onClick={handleAddressClick}>
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs cursor-pointer" onClick={handleAddressClick}>
                      45, Avenue Mohamed V-1002 Montplaisir<br />
                      Tunis-Tunisie
                    </p>
                  </div>
                </div>
                
                {/* Contact us button */}
                <div className="flex items-start space-x-5">
                  <div className="mt-1">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <Button onClick={() => setIsContactDialogOpen(true)} variant="outline" className="border-white hover:text-time-blue-1 transition-colors bg-transparent text-slate-50 text-xs py-1">
                      Écrivez-nous
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - University building image */}
            <div className="hidden md:block relative rounded-lg overflow-hidden">
              
              
            </div>
          </div>
        </div>
        
        {/* Contact Dialog */}
        <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-xl text-time-blue-1">Contactez-nous</DialogTitle>
              <DialogDescription>
                Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.
              </DialogDescription>
            </DialogHeader>
            
<form className="space-y-4 mt-4" onSubmit={handleSubmit}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
      <Input id="name" value={form.name} onChange={handleChange} placeholder="Votre nom" />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <Input id="email" type="email" value={form.email} onChange={handleChange} placeholder="Votre email" />
    </div>
  </div>
  <div>
    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
    <Input id="subject" value={form.subject} onChange={handleChange} placeholder="Sujet de votre message" />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
    <Textarea id="message" value={form.message} onChange={handleChange} placeholder="Votre message" className="min-h-32" />
  </div>
  
  <DialogFooter className="mt-6">
    <Button type="button" variant="outline" onClick={() => setIsContactDialogOpen(false)}>Annuler</Button>
    <Button type="submit" className="bg-time-orange hover:bg-time-orange/90">Envoyer</Button>
  </DialogFooter>
</form>

          </DialogContent>
        </Dialog>
      </div>
    </section>;
};

export default ContactSection;
