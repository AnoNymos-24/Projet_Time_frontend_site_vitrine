
import { ArticleData } from '@/components/articles/ArticleCard';
import api from '@/api';
import { useState, useEffect } from 'react';


export const useArticles = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllArticles = async () => {
      try {
        const res = await api.get("/articles");
        setArticles(res.data);

      } catch (err) {
        console.error("Erreur API :", err);
        alert("Erreur lors du chargement des articles.");
      } 
    };

    getAllArticles();
  }, []);

  const getArticleBySlug = (slug: string): ArticleData | undefined =>
    articles.find(article => article.slug === slug);

  return { articles,  getArticleBySlug };
};

export const getArticleContent = async (slug: string): Promise<string> => {
  try {
    const res = await api.get(`/articles/${slug}`);
    return res.data.content;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'article :", error);
    throw new Error("Impossible de récupérer le contenu de l'article.");
  }
};

