<template>
  <div class="bg-white p-4 rounded shadow">
    <h2 class="text-xl font-bold mb-4">Quadro de medalhas 🥇🥈🥉</h2>
    <hr />
    <SkeletonMedalTable v-if="loading" />
    <table v-else class="w-full text-left table-auto mt-5">
      <thead>
        <tr>
          <th class="py-2">#</th>
          <th class="py-2">Países</th>
          <th class="py-2">🥇</th>
          <th class="py-2">🥈</th>
          <th class="py-2">🥉</th>
          <th class="py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(country, index) in topCountries" :key="country.rank">
          <td class="py-2">{{ country.rank }}</td>
          <td class="py-2 flex items-center">
            <img :src="getFlagUrl(country.country.code)" alt="" class="h-4 w-6 mr-2">
            {{ country.country.name }}
          </td>
          <td class="py-2">{{ country.medals.gold }}</td>
          <td class="py-2">{{ country.medals.silver }}</td>
          <td class="py-2">{{ country.medals.bronze }}</td>
          <td class="py-2">{{ country.medals.total }}</td>
        </tr>
        <tr>
          <td colspan="6">
            <hr class="my-4">
          </td>
        </tr>
        <tr v-if="brazil" :class="{ 'border-l-4 border-green-600': brazil.country.code === 'BRA' }">
          <td class="py-2">{{ brazil.rank }}</td>
          <td class="py-2 flex items-center">
            <img :src="getFlagUrl(brazil.country.code)" alt="" class="h-4 w-6 mr-2">
            {{ brazil.country.name }}
          </td>
          <td class="py-2">{{ brazil.medals.gold }}</td>
          <td class="py-2">{{ brazil.medals.silver }}</td>
          <td class="py-2">{{ brazil.medals.bronze }}</td>
          <td class="py-2">{{ brazil.medals.total }}</td>
        </tr>
      </tbody>
    </table>
    <Modal :visible="showModal" @close="closeModal">
      <h2 class="text-xl font-bold mb-4">Quadro de medalhas completo</h2>
      <table class="w-full text-left table-auto">
        <thead>
          <tr>
            <th class="py-2">#</th>
            <th class="py-2">Países</th>
            <th class="py-2">🥇</th>
            <th class="py-2">🥈</th>
            <th class="py-2">🥉</th>
            <th class="py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="country in fullMedalData" :key="country.rank">
            <td class="py-2">{{ country.rank }}</td>
            <td class="py-2 flex items-center">
              <img :src="getFlagUrl(country.country.code)" alt="" class="h-4 w-6 mr-2">
              {{ country.country.name }}
            </td>
            <td class="py-2">{{ country.medals.gold }}</td>
            <td class="py-2">{{ country.medals.silver }}</td>
            <td class="py-2">{{ country.medals.bronze }}</td>
            <td class="py-2">{{ country.medals.total }}</td>
          </tr>
        </tbody>
      </table>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, Ref } from 'vue';
import Modal from './Modal.vue';
import SkeletonMedalTable from './SkeletonMedalTable.vue';
import axios from 'axios';

interface Country {
  code: string;
  name: string;
}

interface Medal {
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

interface MedalData {
  rank: number;
  country: Country;
  medals: Medal;
}

const countryCodeMap: Record<string, string> = {
  JPN: 'jp',
  CHN: 'cn',
  AUS: 'au',
  FRA: 'fr',
  KOR: 'kr',
  USA: 'us',
  GBR: 'gb',
  ITA: 'it',
  CAN: 'ca',
  HKG: 'hk',
  GER: 'de',
  KAZ: 'kz',
  RSA: 'za',
  BEL: 'be',
  IRL: 'ie',
  AZE: 'az',
  NZL: 'nz',
  ROU: 'ro',
  SLO: 'si',
  BRA: 'br',
  NED: 'nl',
  SWE: 'se',
  SUI: 'ch',
  DEN: 'dk',
  POL: 'pl',
  NOR: 'no',
  FIN: 'fi',
  HUN: 'hu',
  TUR: 'tr',
  ESP: 'es'
};

const showModal: Ref<boolean> = ref(false);
const fullMedalData: Ref<MedalData[]> = ref([]);
const topCountries: Ref<MedalData[]> = ref([]);
const brazil: Ref<MedalData | null> = ref(null);
const loading: Ref<boolean> = ref(true);

const fetchMedalData = async (): Promise<void> => {
  try {
    loading.value = true; 
    const response = await axios.get('https://api.olympics.kevle.xyz/medals/all');
    const results: MedalData[] = response.data.results;
    fullMedalData.value = results;
    topCountries.value = results.slice(0, 4);
    brazil.value = results.find(country => country.country.code === 'BRA') || null;
  } catch (error) {
    console.error('Erro ao buscar dados das medalhas:', error);
  } finally {
    loading.value = false;
  }
};

const getFlagUrl = (countryCode: string): string => {
  const flagCode = countryCodeMap[countryCode] || countryCode.toLowerCase();
  return `https://flagcdn.com/16x12/${flagCode}.png`;
};

const closeModal = (): void => {
  showModal.value = false;
};

onMounted(fetchMedalData);
</script>

<style scoped>
.text-red-600 {
  color: #1b1b96;
}
.border-green-600 {
  border-color: #008000;
}
</style>
