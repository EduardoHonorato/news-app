<template>
    <div class="p-4">
      <h2 class="text-xl font-bold mb-4">Favorites</h2>
      <ul class="space-y-4">
        <li
          v-for="article in favorites"
          :key="article.url"
          class="p-4 bg-white rounded shadow"
        >
          {{ article.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const favorites = ref([]);
  
  // Suponha que a lógica para gerenciar os favoritos esteja aqui
  </script>
  