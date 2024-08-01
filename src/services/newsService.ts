import axios from 'axios';

const API_KEY = 'LU-od5IiZ22XIeOl2a4wxojE_UQT4kZGX-iJ6GRx_12aA934';
const BASE_URL = 'https://api.currentsapi.services/v1/latest-news';

const newsService = {
  async getTopHeadlines() {
    try {
      const response = await axios.get(`${BASE_URL}?language=pt&apiKey=${API_KEY}`, {
       
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
      throw error;
    }
  },
};

export default newsService;
