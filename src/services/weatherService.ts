import axios from 'axios';

const API_KEY = 'yZOVGZFufdvMgVtmGXHkW1ssXTtV7awZ';
const BASE_URL = 'http://dataservice.accuweather.com';

const weatherService = {
  async getCityKey(cityName: string) {
    const response = await axios.get(`${BASE_URL}/locations/v1/search`, {
      params: {
        apikey: API_KEY,
        q: cityName
      }
    });
    return response.data[0].Key;
  },
  async getWeather(cityKey: string) {
    const response = await axios.get(`${BASE_URL}/forecasts/v1/daily/1day/${cityKey}`, {
      params: {
        apikey: API_KEY
      }
    });
    return response.data;
  }
};

export default weatherService;
