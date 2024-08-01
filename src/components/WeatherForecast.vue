<template>
  <div class="bg-white p-4 rounded shadow">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Previsão do Tempo</h2>
      <img src="https://s3.glbimg.com/v1/AUTH_c631e406debd4c4fac98a09d48dc17d1/bastian-post/prod/g1/651203d3-cbbf-47e5-bbcd-678d2451ead7/img/post-previsao-do-tempo/climatempo-logo.svg" alt="Climatempo Logo" class="h-6">
    </div>
    <div v-if="weatherData">
      <h3 class="text-lg font-bold">{{ cityName }} - SP</h3>
      <p>Probabilidade de chuva: {{ rainProbability }}%</p>
      <div class="flex justify-around items-center my-4">
        <div class="text-center">
          <img :src="dayIconUrl" alt="Weather Icon" class="mx-auto">
          <p>manhã</p>
        </div>
        <div class="text-center">
          <img :src="nightIconUrl" alt="Weather Icon" class="mx-auto">
          <p>noite</p>
        </div>
        <div class="text-center">
          <p class="text-xl">{{ maxTemperature }}° <span class="text-sm">max</span></p>
          <p class="text-xl">{{ minTemperature }}° <span class="text-sm">min</span></p>
        </div>
      </div>
      <div class="text-center">
        <button class="text-red-600 font-bold">Veja a previsão do Climatempo <span class="ml-2">→</span></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import weatherService from '../services/weatherService';

interface WeatherData {
  Headline: {
    Text: string;
    MobileLink: string;
  };
  DailyForecasts: {
    Date: string;
    Temperature: {
      Minimum: {
        Value: number;
        Unit: string;
      };
      Maximum: {
        Value: number;
        Unit: string;
      };
    };
    Day: {
      Icon: number;
      IconPhrase: string;
      RainProbability: number;
    };
    Night: {
      Icon: number;
      IconPhrase: string;
      RainProbability: number;
    };
  }[];
}

const weatherData = ref<WeatherData | null>(null);
const cityName = ref<string>('São Paulo');
const maxTemperature = ref<number>(0);
const minTemperature = ref<number>(0);
const rainProbability = ref<number>(0);
const dayIconUrl = ref<string>('');
const nightIconUrl = ref<string>('');

const fetchWeather = async () => {
  try {
    const cityKey = await weatherService.getCityKey(cityName.value);
    const data = await weatherService.getWeather(cityKey);

    maxTemperature.value = convertToCelsius(data.DailyForecasts[0].Temperature.Maximum.Value);
    minTemperature.value = convertToCelsius(data.DailyForecasts[0].Temperature.Minimum.Value);
    rainProbability.value = 18;

    dayIconUrl.value = getIconUrl(data.DailyForecasts[0].Day.Icon);
    nightIconUrl.value = getIconUrl(data.DailyForecasts[0].Night.Icon);

    weatherData.value = data;
  } catch (error) {
    console.error('Erro ao buscar dados do tempo:', error);
  }
};

const convertToCelsius = (fahrenheit: number) => {
  return Math.round((fahrenheit - 32) * 5 / 9);
};

const getIconUrl = (iconNumber: number) => {
  return `https://developer.accuweather.com/sites/default/files/${iconNumber < 10 ? '0' + iconNumber : iconNumber}-s.png`;
};

onMounted(fetchWeather);
</script>

<style scoped>
.text-red-600 {
  color: #1b1b96;
}
</style>
