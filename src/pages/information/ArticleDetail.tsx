import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ArticleSlider from '@/components/articles/ArticleSlider';
import { useArticles, getArticleContent } from '@/hooks/articles';
import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';


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

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getArticleBySlug, articles } = useArticles();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const [content, setContent] = useState<string>('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

useEffect(() => {
  const fetchContent = async () => {
    try {
      setLoading(true);
      const html = await getArticleContent(slug!);
      setContent(html);
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  fetchContent();
}, [slug]);





 // if (!article) return <div>Chargement en cours…</div>;
if (loading) return <div>Chargement...</div>;
if (error) return <div>Erreur lors du chargement de l’article.</div>;
 if (!article) {
    return <Navigate to="/information/actualite" replace />;
  }

 





  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <div className="mb-8">
          {article?.catégorie && (
            <Badge className={getCategoryColor(article.catégorie)}>
              {getCategoryLabel(article.catégorie)}
            </Badge>
          )}

          <h1 className="text-3xl font-bold mt-3 mb-4">{article.title}</h1>

          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            {article.published_at_formatted}
          </div>
        </div>

        <div className="mb-8">
          <div className="aspect-[16/9] overflow-hidden rounded-lg mb-6">
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <div className="border-t pt-8">
          <ArticleSlider
            articles={articles}
            currentArticleId={article.article_id}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
