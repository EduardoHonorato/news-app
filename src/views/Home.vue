<template>
    <div>
      <Header />
      <Banner />
      <div class="container mx-auto flex flex-col lg:flex-row mt-4">
        <div class="w-full lg:w-2/3 p-4 mt-[-15em]">
          <ArticleList @selectArticle="openModal" />
        </div>
        <div class="w-full lg:w-1/3 p-4 mt-[-14em]">
          <WeatherForecast />
          <MedalTable class="mt-4"/>
          <SideNews :articles="articlesWithImages" @selectArticle="openModal" class="mt-4" />
        </div>
      </div>
      <Modal :visible="isModalVisible" @close="closeModal">
        <div v-if="selectedArticle">
          <img :src="selectedArticle.urlToImage || 'https://via.placeholder.com/150'" alt="Article Image" class="w-full h-64 object-cover rounded mb-4">
          <h2 class="text-2xl font-bold mb-2">{{ selectedArticle.title }}</h2>
          <p>{{ selectedArticle.content }}</p>
          <button @click="addFavorite" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            {{ isFavorited ? 'Favoritado' : 'Add to Favorites' }}
          </button>
        </div>
      </Modal>
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import Header from '../components/Header.vue';
  import Banner from '../components/Banner.vue';
  import ArticleList from '../components/ArticleList.vue';
  import Modal from '../components/Modal.vue';
  import Footer from '../components/Footer.vue';
  import SideNews from '../components/SideNews.vue';
  import WeatherForecast from '../components/WeatherForecast.vue';
  import MedalTable from '../components/MedalTable.vue';
  import newsService from '../services/newsService';
  
  interface Article {
    url: string;
    urlToImage: string;
    title: string;
    content: string;
  }
  
  const selectedArticle = ref<Article | null>(null);
  const isModalVisible = ref(false);
  const isFavorited = ref(false);
  const articlesWithImages = ref<Article[]>([]);
  
  const favorites = ref(JSON.parse(localStorage.getItem('favorites') || '[]'));
  
  const fetchArticles = async () => {
    try {
      const response = await newsService.getTopHeadlines('br');
      articlesWithImages.value = response.data.articles.slice(10, 20);
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
    }
  };
  
  const openModal = (article: Article) => {
    selectedArticle.value = article;
    isFavorited.value = favorites.value.some((fav: Article) => fav.url === article.url);
    isModalVisible.value = true;
  };
  
  const closeModal = () => {
    isModalVisible.value = false;
  };
  
  const addFavorite = () => {
    if (!favorites.value.some((fav: Article) => fav.url === selectedArticle.value!.url)) {
      favorites.value.push(selectedArticle.value);
      localStorage.setItem('favorites', JSON.stringify(favorites.value));
      isFavorited.value = true;
    }
  };
  
  onMounted(fetchArticles);
  </script>
  