<template>
    <div class="bg-white p-4 rounded shadow">
      <h2 class="text-xl font-bold mb-4">Viu isso aqui?</h2>
      <div v-for="article in articles" :key="article.url" class="mb-4 flex border-b pb-4 cursor-pointer" @click="selectArticle(article)">
        <img :src="article.urlToImage || 'https://picsum.photos/200/300'" alt="Article Image" class="w-24 h-24 object-cover rounded mr-4">
        <h3 class="font-bold text-color-600">{{ article.title }}</h3>
      </div>
      <div class="mt-4 text-center">
        <button class="text-color-600 font-bold">Mais conteúdos recomendados</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  interface Article {
    url: string;
    urlToImage: string;
    title: string;
    content: string;
  }
  
  const props = defineProps<{ articles: Article[] }>();
  const emit = defineEmits(['selectArticle']);
  
  const selectArticle = (article: Article) => {
    emit('selectArticle', article);
  };
  </script>
  
  <style scoped>
  .text-color-600 {
    color: #1b1b96;
  }
  </style>
  