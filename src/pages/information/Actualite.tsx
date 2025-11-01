
import React from 'react';
import Layout from '@/components/Layout';
import ArticleCard from '@/components/articles/ArticleCard';
import EventsSidebar from '@/components/articles/EventsSidebar';
import { events } from '@/data/events';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Newspaper } from 'lucide-react';
import { useArticles } from '@/hooks/articles';



const Actualite: React.FC = () => {
  const {  articles } = useArticles();
  const categories = Array.from(new Set(articles.map(a => a.catégorie)));
  const [activeCategory, setActiveCategory] = React.useState('all');

  if (!articles) {
  return <div className="text-center py-8">Chargement des articles...</div>;
}


  // Map the home page news to have the same structure as articles

const homePageNews = React.useMemo(() => {
  return articles.map(item => ({
    id: `${item.article_id}`,
    title: item.title,
    content: item.content,
    published_at_formatted: item.published_at_formatted,
    catégorie: item.catégorie,
    image_url: item.image_url,
    slug: `${item.slug}`,
  }));
}, [articles]);

const filteredArticles = activeCategory === 'all'
  ? homePageNews
  : homePageNews.filter(article => article.catégorie === activeCategory);


  const allArticles = [...homePageNews];

  return (
    <Layout>
      <div className="container max-w-7xl mx-auto py-8 px-4">
        <div className="flex items-center gap-2 mb-4">
          <Newspaper className="h-6 w-6 text-time-blue-1" />
          <h1 className="text-3xl font-bold text-time-blue-1">Actualités</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homePageNews.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            {homePageNews.length === 0 && (
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <p className="text-gray-500">Aucun article trouvé</p>
              </div>
            )}
          </div>
          
          <div className="w-full lg:w-1/4">
            <EventsSidebar events={events} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Actualite;
