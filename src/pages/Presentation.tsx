import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import NavigationTabs from '@/components/NavigationTabs';
import AboutHistorySection from '@/components/AboutHistorySection';
import DirectorInterviewSection from '@/components/DirectorInterviewSection';
import MissionSection from '@/components/MissionSection';
import ValuesSection from '@/components/ValuesSection';
import ValuesHeader from '@/components/ValuesHeader';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import CampusSection from '@/components/CampusSection';
const Presentation: React.FC = () => {
  const {
    t
  } = useLanguage();
  const location = useLocation();

  // Scroll to anchor if present in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Handle tab click for smooth scrolling
  const handleTabClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <Layout>
      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b">
        <NavigationTabs onTabClick={handleTabClick} />
      </div>

      {/* About Us History Section */}
      <AboutHistorySection />
      
      {/* Director Interview Section */}
      <DirectorInterviewSection />

      {/* Our Mission Section */}
      <MissionSection />

      {/* Our Values Section */}
      <section id="nos-valeurs" className="py-0 bg-gray-100">
        <div className="section-container py-[64px]">
          <ValuesHeader title="Nos valeurs" subtitle="Les valeurs qui nous animent fondent l'identité de TIME Université et orientent notre action" />
          <ValuesSection />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="bg-gray-50 py-[38px]">
        <WhyChooseUsSection />
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-0">
        <TestimonialsSection />
      </section>

      {/* Partners Section */}
      <section id="partners" className="bg-gray-50 py-0">
        <div className="section-container py-[45px]">
          <ValuesHeader title="Nos partenaires" subtitle="Nous collaborons avec des institutions prestigieuses pour offrir la meilleure formation" />
          <PartnersSection />
        </div>
      </section>

      {/* Visit Campus Section */}
      <CampusSection />
    </Layout>;
};
export default Presentation;