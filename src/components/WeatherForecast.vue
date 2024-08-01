<template>
  <div class="bg-white p-4 rounded shadow">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Previsão do Tempo</h2>
      <img
        src="https://s3.glbimg.com/v1/AUTH_c631e406debd4c4fac98a09d48dc17d1/bastian-post/prod/g1/651203d3-cbbf-47e5-bbcd-678d2451ead7/img/post-previsao-do-tempo/climatempo-logo.svg"
        alt="Climatempo Logo"
        class="h-6"
      />
    </div>
    <hr />
    <div v-if="weatherData" class="mt-5">
      <h3 class="text-lg font-bold">{{ weatherData.name }}</h3>
      <p>Probabilidade de chuva: {{ rainProbability }}%</p>
      <div class="flex justify-around items-center my-4">
        <div class="text-center">
          <img :src="morningIconUrl" alt="Morning Weather Icon" class="mx-auto" />
          <p>manhã</p>
        </div>
        <div class="text-center">
          <img :src="afternoonIconUrl" alt="Afternoon Weather Icon" class="mx-auto" />
          <p>tarde</p>
        </div>
        <div class="text-center">
          <img :src="nightIconUrl" alt="Night Weather Icon" class="mx-auto" />
          <p>noite</p>
        </div>
        <div class="text-center">
          <p class="text-xl">
            {{ Math.round(weatherData.main.temp_max) }}° <span class="text-sm">max</span>
          </p>
          <p class="text-xl">
            {{ Math.round(weatherData.main.temp_min) }}° <span class="text-sm">min</span>
          </p>
        </div>
      </div>
    
    </div>
    <div v-else>
      <p>Carregando dados do tempo...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import weatherService from '../services/weatherService';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

const weatherData = ref<WeatherData | null>(null);
const rainProbability = ref<number>(0);
const morningIconUrl = ref<string>('');
const afternoonIconUrl = ref<string>('');
const nightIconUrl = ref<string>('');

const fetchWeather = async (lat: number, lon: number) => {
  try {
    const data = await weatherService.getWeatherByCoordinates(lat, lon);

    weatherData.value = data;
    
    morningIconUrl.value = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    afternoonIconUrl.value = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    nightIconUrl.value = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    rainProbability.value = data.rain ? (data.rain['1h'] || data.rain['3h']) * 10 : 0;
  } catch (error) {
    console.error('Erro ao buscar dados do tempo:', error);
  }
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error('Erro ao obter localização:', error);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
};

onMounted(getLocation);
</script>

<style scoped>
.text-red-600 {
  color: #1b1b96;
}
</style>
