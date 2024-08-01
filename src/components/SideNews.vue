<template>
  <div class="bg-white p-4 rounded shadow">
    <h2 class="text-xl font-bold mb-4">Viu isso aqui?</h2>
    <hr />
    <div v-if="loading">
      <SkeletonSideNews v-for="n in 5" :key="n" />
    </div>
    <div
      v-else
      v-for="article in articles"
      :key="article?.url"
      class="mb-4 flex border-b pb-4 cursor-pointer mt-5"
      @click="selectArticle(article)"
    >
      <img
        :src="article?.image || 'https://picsum.photos/200/300'"
        :alt="article?.title"
        :title="article?.title"
        class="w-24 h-24 object-cover rounded mr-4"
      />
      <div class="flex-grow">
        <h3 class="font-bold text-color-600" :title="article?.title">
          {{ article?.title ?? "Notícia sem título" }}
        </h3>
        <span class="description" :title="article?.title">
          {{ article?.description ?? "Sem descrição disponível." }}
        </span>
      </div>
    </div>
    <div class="mt-4 text-center">
      <button class="text-color-600 font-bold">
        Mais conteúdos recomendados
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { defineEmits } from 'vue';
import SkeletonSideNews from './SkeletonSideNews.vue';
import newsService from '../services/newsService';

interface Article {
  url: string;
  urlToImage: string;
  title: string;
  description: string;
}

const emit = defineEmits(['selectArticle']);
const articles = ref<Article[]>([]);
const loading = ref(true); 

const fetchArticles = async () => {
  try {
    loading.value = true;
    const response = await newsService.getTopHeadlines('br', 'technology');
    articles.value = response.data.news.slice(0, 5);
  } catch (error) {
    console.error('Erro ao buscar notícias no SideNews:', error);
  } finally {
    loading.value = false; 
  }
};

const selectArticle = (article: Article) => {
  emit('selectArticle', article);
};

onMounted(fetchArticles);
</script>

<style scoped>
.text-color-600 {
  color: #1b1b96;
}

.description {
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.5rem; 
  font-size: 0.875rem; 
  color: #555;
}
</style>
