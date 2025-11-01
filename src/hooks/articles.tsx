import { useState, useEffect } from 'react';
import { ArticleData } from '@/components/articles/ArticleCard';
import api from '@/api';

interface PaginatedArticleResponse {
  data: ArticleData[];
  links: object;
  meta: object;
}

export const useArticles = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    const getAllArticles = async () => {
      try {
        const res = await api.get<PaginatedArticleResponse>("/articles");
        const raw = res.data;

        if (Array.isArray(raw.data)) {
          setArticles(raw.data);
        } else {
          console.error("⚠️ Données d'articles inattendues :", raw);
        }
      } catch (err) {
        console.error("❌ Erreur API :", err);
        alert("Erreur lors du chargement des articles.");
      }
    };

    getAllArticles();
  }, []);

  const getArticleBySlug = (slug: string): ArticleData | undefined => {
    return articles.find(article => article.slug === slug);
  };

  return { articles, getArticleBySlug };
};




export const getArticleContent = async (slug: string): Promise<string> => {
  try {
    const res = await api.get(`/articles/${slug}`);
    
    const article = res.data?.data;

    if (article && typeof article.content === 'string') {
      return article.content;
    } else {
      console.warn("Contenu manquant ou invalide :", res.data);
      return "<p>Contenu de l'article indisponible.</p>";
    }

  } catch (error) {
    console.error("Erreur lors de la récupération de l'article :", error);
    return "<p>Erreur lors du chargement du contenu.</p>";
  }
};

// utils/articles.ts
/* export const getCategoryColor = (cat: string) => { ... }
export const getCategoryLabel = (cat: string) => { ... } */



