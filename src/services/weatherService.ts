import axios from 'axios';

const API_KEY = '601bff46a9b13bc176905bf3293ace21';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const weatherService = {
  async getWeatherByCoordinates(lat: number, lon: number) {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: 'metric',
          lang: 'pt_br'
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  },
};

export default weatherService;
