<template>
    <div class="p-4">
      <input
        v-model="keyword"
        @input="filterArticles"
        placeholder="Procurar"
        class="p-2 border rounded w-full mb-4"
      />
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ArticleCard 
          v-for="article in filteredArticles" 
          :key="article.url" 
          :article="article" 
          @selectArticle="selectArticle" 
        />
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, defineEmits } from 'vue';
  import ArticleCard from './ArticleCard.vue';
  import newsService from '../services/newsService';
  
  interface Article {
    url: string;
    urlToImage: string;
    title: string;
    content: string;
  }
  
  const emit = defineEmits(['selectArticle']);
  
  const articles = ref<Article[]>([]);
  const keyword = ref('');
  const filteredArticles = ref<Article[]>([]);
   
  const fetchArticles = async () => {
    try {
      
      const response = await newsService.getTopHeadlines('br');
      articles.value = response.data.articles.slice(0, 10);
      articles.value = articles.value;
      filteredArticles.value = articles.value;
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
    }
  };
  
  const filterArticles = () => {
    if (!keyword.value) {
      filteredArticles.value = articles.value;
    } else {
      filteredArticles.value = articles.value.filter(article =>
        article.title.toLowerCase().includes(keyword.value.toLowerCase())
      );
    }
  };
  
  const selectArticle = (article: Article) => {
    emit('selectArticle', article);
  };
  
  onMounted(fetchArticles);
  </script>
  