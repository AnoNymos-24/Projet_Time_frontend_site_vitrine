
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import TopHeader from './TopHeader';
import MainNavigation from './MainNavigation';
import Footer from './Footer';



interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <TopHeader />
        <MainNavigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
