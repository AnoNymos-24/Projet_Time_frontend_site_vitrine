
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { news } from '@/data/news';
import api from "@/api";
import { useArticles } from '@/data/articles';





const NewsSection: React.FC = () => {
  const { t } = useLanguage();
  //const { getAllArticles, articles, loading } = useArticles();
  const carouselRef = useRef<any | null>(null);
  const isMobile = useIsMobile();
  const [visibleItems, setVisibleItems] = useState(3);
  const [news, setNews] = useState<any[]>([]);
  const[loading, setLoading]= useState(true)


  // Récupération des données depuis Laravel
/*  const getAllArticles = async () => {
      try {
        const res = await api.get("/articles");
            
            console.log("Données reçues dans React:", res.data); // Vérifie le format des données
            setNews(Array.isArray(res.data.data) ? res.data.data.slice(0, 6) : []); // Utilise res.data.data

      } catch (err) {
        console.error("Erreur API :", err);
        alert("Erreur lors du chargement des articles.");
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
  getAllArticles();
}, []); */

const getExcerpt = (content: string, wordLimit = 30) => {
  const words = content.split(/\s+/);
  if (words.length <= wordLimit) return content;
  return words.slice(0, wordLimit).join(' ') + '…';
};




  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

useEffect(() => {
  const interval = setInterval(() => {
    const api = carouselRef.current?.api;
    if (!api || typeof api.scrollNext !== 'function') return;

    if (api.canScrollNext()) {
      api.scrollNext();
    } else {
      api.scrollTo(0);
    }
  }, 5000);

  return () => clearInterval(interval);
}, [carouselRef]);


  return (
    <section className="section-container py-16 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-time-blue-1 mb-4">Actualités</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-justified">
          Restez informé des dernières nouvelles concernant l'Université TIME
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <Carousel 
          ref={carouselRef} 
          className="w-full" 
          opts={{ align: "start", loop: true, slidesToScroll: 1 }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {news.map((item) => (
              <CarouselItem 
                key={item.id} 
                className={`pl-2 md:pl-4 ${
                  isMobile ? 'basis-full' : 
                  visibleItems === 2 ? 'basis-1/2' : 
                  'basis-1/3'
                }`}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <div 
                    className="w-full h-48 bg-cover bg-center cursor-pointer" 
                    style={{backgroundImage: `url(${item.image_url})`}} // Assure-toi que ton API retourne bien ce champ
                  ></div>
                  <CardHeader>
                    <div className="text-time-orange text-sm mb-1 rounded-sm">{item.published_at_formatted}</div>
                    <CardTitle className="text-time-blue-1 text-zinc-900 text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-zinc-700 text-justified">{getExcerpt(item.content, 30)}</p>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/information/actualite/${item.slug}`}>
                      <Button variant="link" className="p-0 hover:text-time-blue-1 text-sm text-zinc-500">
                        {t('learn-more')} →
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-center mt-6 gap-2">
            <CarouselPrevious className="static transform-none mx-1" />
            <CarouselNext className="static transform-none mx-1" />
          </div>
        </Carousel>

        <div className="text-center mt-8">
          <Link to="/information/actualite">
            <Button variant="outline" className="border-time-blue-1 text-time-blue-1 hover:bg-time-blue-1 hover:text-white">
              Voir toutes les actualités
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

