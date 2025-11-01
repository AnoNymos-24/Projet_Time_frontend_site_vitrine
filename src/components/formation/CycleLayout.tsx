import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import { useLocation } from 'react-router-dom';
interface CycleLayoutProps {
  title: string;
  description: string;
  coverImage?: string;
  children: React.ReactNode;
}
const CycleLayout: React.FC<CycleLayoutProps> = ({
  title,
  description,
  coverImage = 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1740&auto=format&fit=crop',
  children
}) => {
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Handle anchor navigation
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 200);
    } else {
      // Scroll to top when no hash is present
      window.scrollTo(0, 0);
    }
  }, [location]);
  return <Layout>
      {/* Header Section */}
      <div className="relative">
        <div className="h-80 w-full bg-cover bg-center" style={{
        backgroundImage: `url(${coverImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#005ecd]/80 to-[#005ecd]/40"></div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="flex flex-col md:flex-row items-center md:justify-between">
              <div className="mb-6 md:mb-0 md:max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                <p className="text-white/80 text-xl">{description}</p>
              </div>
              <div className="hidden md:block">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div ref={contentRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </Layout>;
};
export default CycleLayout;