import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import api from '@/api';
import { useState, useEffect } from 'react';



export interface ArticleData {
  article_id: string;
  title: string;
  published_at_formatted: string;
  catégorie: string;
  image_url: string;
  slug: string;
  content: string;
}
interface ArticleCardProps {
 article: ArticleData;
}


//const [articles setArticles] 
const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'club':
      return 'Club';
    case 'activite-extrascolaire':
      return 'Activité extrascolaire';
    case 'actualite':
      return 'Actualité';
    default:
      return category;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Club':
      return 'bg-blue-100 text-blue-800';
    case 'Activité extrascolaire':
      return 'bg-green-100 text-green-800';
    case 'actualite':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};


const ArticleCard: React.FC<ArticleCardProps> = ({
  article
}) => {
  return <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <img src={article.image_url} alt={article.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Badge className={getCategoryColor(article.catégorie)}>
            {getCategoryLabel(article.catégorie)}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            {article.published_at_formatted}
          </div>
        </div>
        <Link to={`/information/actualite/${article.slug}`}>
          <h3 className="line-clamp-2 hover:text-time-blue-1 transition-colors font-semibold text-lg text-zinc-950">
            {article.title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-3 text-zinc-950 text-sm">{article.content}</p>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/information/actualite/${article.slug}`} 
          className="w-full text-left py-2 text-time-blue-1 font-medium transition-colors hover:text-time-orange text-xs"
        >
          Lire l'article
        </Link>
      </CardFooter>
    </Card>;
};
export default ArticleCard;
