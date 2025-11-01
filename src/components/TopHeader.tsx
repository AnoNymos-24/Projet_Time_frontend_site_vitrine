
import React, { useState } from 'react';
import { Search, Mail, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';

const TopHeader: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  
  const isMobile = useMediaQuery("(max-width: 640px)");

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsNewsletterOpen(false); // Close newsletter if opening search
    }
  };

  const handleNewsletterToggle = () => {
    setIsNewsletterOpen(!isNewsletterOpen);
    if (!isNewsletterOpen) {
      setIsSearchOpen(false); // Close search if opening newsletter
    }
  };

  return (
    <div className="bg-[#004377] text-white h-[15px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
        {/* Search Bar - Desktop shows input, Mobile shows icon */}
        {/* <div className="relative sm:w-60">
          {isMobile ? (
            <>
              <button 
                onClick={handleSearchToggle} 
                className="p-1.5 rounded-full hover:bg-[#003b6a] transition-colors"
                aria-label={t('search')}
              >
                {isSearchOpen ? (
                  <X className="h-4 w-4 text-white" />
                ) : (
                  <Search className="h-4 w-4 text-white" />
                )}
              </button>
              
              {isSearchOpen && (
                <div className="fixed top-[51px] left-0 z-50 w-full bg-[#004377] p-3 rounded-b-md shadow-lg">
                  <div className="relative">
                    <Input 
                      type="search" 
                      placeholder={t('search')} 
                      className="pl-8 py-1 h-10 w-full text-sm bg-transparent border-0 placeholder:text-white/70 focus:outline-none focus:ring-0"
                      autoFocus
                    />
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <Input 
                type="search" 
                placeholder={t('search')} 
                className="pl-8 py-1 h-7 w-full text-xs bg-transparent border-0 placeholder:text-white/70 focus:border-transparent focus:outline-none focus:ring-0 hover:outline-none hover:ring-0"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                style={{ outline: 'none', boxShadow: 'none' }}
              />
              <Search 
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-white/70 transition-all duration-300 ${
                  isSearchFocused ? 'text-white scale-125' : 'text-white/70'
                }`} 
              />
            </>
          )}
        </div> */}
        
        {/* Newsletter & Language Selector */}
{/*         <div className="flex items-center gap-3">
          // Newsletter subscription - Desktop shows form, Mobile shows icon 
          {isMobile ? (
            <div className="relative">
              <button 
                onClick={handleNewsletterToggle} 
                className="p-1.5 rounded-full hover:bg-[#003b6a] transition-colors"
                aria-label={t('subscribe')}
              >
                {isNewsletterOpen ? (
                  <X className="h-4 w-4 text-white" />
                ) : (
                  <Mail className="h-4 w-4 text-white" />
                )}
              </button>
              
              {isNewsletterOpen && (
                <form className="fixed top-[51px] right-0 z-50 bg-[#004377] p-3 rounded-b-md shadow-lg w-full">
                  <div className="flex h-10 w-full">
                    <Input 
                      type="email" 
                      placeholder={t('email')} 
                      className="w-full h-10 rounded-r-none bg-transparent border-0 border-r-0 placeholder:text-white/70 text-sm focus:outline-none focus:ring-0"
                      autoFocus
                    />
                    <Button 
                      type="submit" 
                      size="sm"
                      variant="default" 
                      className="h-10 px-3 rounded-l-none bg-time-orange hover:bg-time-orange/90 border-none text-sm"
                    >
                      {t('subscribe')}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <form className="flex h-7">
              <Input 
                type="email" 
                placeholder={t('email')} 
                className="w-36 sm:w-40 h-7 rounded-r-none bg-transparent border-0 border-r-0 placeholder:text-white/70 text-xs focus:outline-none focus:ring-0 focus:border-transparent hover:outline-none hover:ring-0"
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                style={{ outline: 'none', boxShadow: 'none' }}
              />
              <Button 
                type="submit" 
                size="sm"
                variant="default" 
                className={`h-7 px-2 rounded-l-none bg-time-orange hover:bg-time-orange/90 border-none text-xs transition-all duration-300 ${
                  isEmailFocused ? 'scale-105 shadow-md' : ''
                }`}
              >
                {t('subscribe')}
              </Button>
            </form>
          )}
          
          // Language selector 
          <div className="flex rounded overflow-hidden h-7">
            <button 
              onClick={() => setLanguage('fr')} 
              className={`px-2 h-full text-xs font-medium transition-colors ${language === 'fr' ? 'bg-white text-[#004377]' : 'bg-[#004377]/50 text-white'}`}
            >
              FR
            </button>
            <button 
              onClick={() => setLanguage('ar')} 
              className={`px-2 h-full text-xs font-medium transition-colors ${language === 'ar' ? 'bg-white text-[#004377]' : 'bg-[#004377]/50 text-white'}`}
            >
              AR
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TopHeader;
