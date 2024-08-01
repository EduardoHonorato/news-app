<template>
    <div v-if="article" class="p-4 bg-white rounded shadow">
      <h1 class="text-2xl font-bold mb-4">{{ article.title }}</h1>
      <p v-if="article.content">{{ article.content }}</p>
      <p v-else>{{ article.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    article: Object
  });
  </script>
  