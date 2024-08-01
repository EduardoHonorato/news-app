<template>
    <div>
      <Header />
      <div class="container mx-auto p-4">
        <h1 v-if="favorites.length === 0" class="text-2xl font-bold text-center my-20">Não há nenhuma notícia favorita ainda!</h1>
        <ul v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li v-for="article in favorites" :key="article.url" class="bg-white p-4 rounded shadow">
            <img :src="article.urlToImage || 'https://via.placeholder.com/150'" alt="Article Image" class="w-full h-48 object-cover rounded mb-4">
            <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <button @click="removeFavorite(article)" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">Remover Favorito</button>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  const favorites = ref(JSON.parse(localStorage.getItem('favorites') || '[]'));
  
  const removeFavorite = (article) => {
    favorites.value = favorites.value.filter(fav => fav.url !== article.url);
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  };
  </script>
  