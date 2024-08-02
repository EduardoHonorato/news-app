import axios, { AxiosResponse } from 'axios';

const API_KEY = '601bff46a9b13bc176905bf3293ace21';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface WindData {
  speed: number;
  deg: number;
}

interface WeatherData {
  weather: WeatherCondition[];
  main: MainWeatherData;
  wind: WindData;
  name: string;
  cod: number;
}

class WeatherService {
  private static instance: WeatherService;

  private constructor() {}

  public static getInstance(): WeatherService {
    if (!WeatherService.instance) {
      WeatherService.instance = new WeatherService();
    }
    return WeatherService.instance;
  }

  public async getWeatherByCoordinates(lat: number, lon: number): Promise<WeatherData> {
    try {
      const response: AxiosResponse<WeatherData> = await axios.get(`${BASE_URL}/weather`, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: 'metric',
          lang: 'pt_br',
        },
      });
      return response.data;
    } catch (error: any) {
      console.error('Error fetching weather data:', error);
      throw new Error('Failed to fetch weather data');
    }
  }
}

export default WeatherService.getInstance();
