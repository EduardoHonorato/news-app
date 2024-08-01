import axios from 'axios';

const API_KEY = '26bb57eff38c4af5aef4b100eb3f646a';
const BASE_URL = 'https://newsapi.org/v2';

const newsService = {
  getTopHeadlines(country: string = 'br') {
    return axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country,
        apiKey: API_KEY
      }
    });
  }
};

export default newsService;
