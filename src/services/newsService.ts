import axios, { AxiosResponse } from 'axios';

const API_KEY = 'LU-od5IiZ22XIeOl2a4wxojE_UQT4kZGX-iJ6GRx_12aA934';
const BASE_URL = 'https://api.currentsapi.services/v1/latest-news';

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string;
  language: string;
  category: string[];
  published: string;
}

interface NewsResponse {
  status: string;
  news: NewsArticle[];
  page: number;
}

const newsService = {
  async getTopHeadlines(): Promise<NewsArticle[]> {
    try {
      const response: AxiosResponse<NewsResponse> = await axios.get(
        `${BASE_URL}?language=pt&apiKey=${API_KEY}`
      );

      if (response.data && response.data.news) {
        return response.data.news;
      } else {
        console.error('Formato de resposta inesperado ou resposta vazia:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
      throw error;
    }
  },
};

export default newsService;
