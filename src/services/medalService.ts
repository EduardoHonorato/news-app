import axios from 'axios';

interface Country {
  code: string;
  name: string;
}

interface MedalData {
  country: Country;
  gold: number;
  silver: number;
  bronze: number;
}

const apiClient = axios.create({
  baseURL: 'https://api.olympics.kevle.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchMedalData = async (): Promise<MedalData[]> => {
  try {
    const response = await apiClient.get('/medals/all');
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar dados das medalhas:', error);
    throw error;
  }
};

export default {
  fetchMedalData,
};
