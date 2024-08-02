<template>
  <div>
    <Header />
    <Banner />
    <div class="container mx-auto flex flex-col lg:flex-row mt-4">
      <div class="w-full lg:w-2/3 p-4 lg:mt-[-15em] mt-[-2em]">
        <ArticleList @selectArticle="openModal" class="mt-12 lg:mt-1" />
      </div>
      <div class="w-full lg:w-1/3 p-4 lg:mt-[-14em]">
        <WeatherForecast class="mt-12 lg:mt-0" />
        <MedalTable class="mt-12 lg:mt-5" />
        <SideNews @selectArticle="openModal" class="mt-12 lg:mt-5" />
      </div>
    </div>
    <Modal :visible="isModalVisible" @close="closeModal">
      <div v-if="selectedArticle">
        <img
          :src="selectedArticle.image || 'https://via.placeholder.com/150'"
          alt="Article Image"
          class="w-full object-cover rounded mb-4"
        />
        <h2 class="text-2xl font-bold mb-2">{{ selectedArticle.title }}</h2>
        <p>{{ selectedArticle.description }}</p>
        <button
          @click="toggleFavorite"
          class="mt-4 px-4 py-2 text-white rounded font-semibold"
          :class="{ 'bg-green-600': isFavorited, 'bg-blue-500': !isFavorited }"
        >
          {{ isFavorited ? 'Favoritado ♥' : 'Favoritar' }}
        </button>
      </div>
    </Modal>
    <Footer class="mt-12 lg:mt-0" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import ArticleList from '../components/ArticleList.vue';
import Modal from '../components/Modal.vue';
import Footer from '../components/Footer.vue';
import SideNews from '../components/SideNews.vue';
import WeatherForecast from '../components/WeatherForecast.vue';
import MedalTable from '../components/MedalTable.vue';

interface Article {
  url: string;
  urlToImage: string;
  title: string;
  description: string;
  content: string;
}

const selectedArticle = ref<Article | null>(null);
const isModalVisible = ref(false);

const favorites = ref<Article[]>(JSON.parse(localStorage.getItem('favorites') || '[]'));

const isFavorited = computed(() =>
  favorites.value.some((fav) => fav.url === selectedArticle.value?.url)
);

const openModal = (article: Article): void => {
  selectedArticle.value = article;
  isModalVisible.value = true;
};

const closeModal = (): void => {
  isModalVisible.value = false;
};

const toggleFavorite = (): void => {
  if (!selectedArticle.value) return;

  if (isFavorited.value) {
    favorites.value = favorites.value.filter((fav) => fav.url !== selectedArticle.value?.url);
  } else {
    favorites.value.push(selectedArticle.value);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites.value));
};
</script>
