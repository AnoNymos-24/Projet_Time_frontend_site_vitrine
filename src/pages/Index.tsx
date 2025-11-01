
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProgramsSection from '@/components/ProgramsSection';
import NewsSection from '@/components/NewsSection';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';
import CtaSection from '@/components/CtaSection';
import AboutUsSection from '@/components/AboutUsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <AboutUsSection />
      <ProgramsSection />
      <NewsSection /> 
{/*   <EventsSection />*/}
      <ContactSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
