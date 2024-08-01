<template>
    <div>
      <Header />
      <div class="container mx-auto flex mt-4">
        <div class="w-full p-4">
          <ArticleDetail :article="article" />
          <button @click="addFavorite" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add to Favorites</button>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Header from '../components/Header.vue';
  import ArticleDetail from '../components/ArticleDetail.vue';
  import Footer from '../components/Footer.vue';
  
  const route = useRoute();
  const article = ref(null);
  
  const fetchArticle = async () => {
    const articleUrl = decodeURIComponent(route.params.articleUrl);
    const response = await fetch(`https://newsapi.org/v2/everything?apiKey=26bb57eff38c4af5aef4b100eb3f646a&q=${articleUrl}`);
    const data = await response.json();
    article.value = data.articles[0];
  };
  
  const addFavorite = () => {
    // Lógica para adicionar aos favoritos
  };
  
  onMounted(fetchArticle);
  </script>
  