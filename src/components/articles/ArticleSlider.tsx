
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArticleData } from './ArticleCard';

interface ArticleSliderProps {
  articles: ArticleData[];
  currentArticleId?: string;
}

const ArticleSlider: React.FC<ArticleSliderProps> = ({ articles, currentArticleId }) => {
  // Filter out the current article if an ID is provided
  const filteredArticles = currentArticleId
    ? articles.filter(article => article.article_id !== currentArticleId)
    : articles;

  // Create a ref for the container
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Scroll functions
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-10 w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-time-blue-1">Articles liés</h3>
        <div className="flex gap-2">
          <Button
            onClick={scrollLeft}
            variant="outline"
            size="icon"
            className="rounded-full h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={scrollRight}
            variant="outline"
            size="icon"
            className="rounded-full h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div 
        ref={containerRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {filteredArticles.map(article => (
          <div 
            key={article.article_id} 
            className="min-w-[280px] snap-start"
          >
            <Link to={`/information/actualite/${article.slug}`} className="block group">
              <div className="aspect-[4/3] overflow-hidden rounded-md mb-2">
                <img 
                  src={article.image_url} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h4 className="font-medium line-clamp-2 group-hover:text-time-blue-1">{article.title}</h4>
            </Link>
          </div>
        ))}
      </div>
      {/* Apply CSS for hiding scrollbar using a style tag with standard CSS */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default ArticleSlider;
