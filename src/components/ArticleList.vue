<template>
  <div class="p-4">
    <input
      v-model="keyword"
      @input="filterArticles"
      placeholder="Procurar"
      class="p-2 border rounded w-full mb-4"
    />
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Show skeletons if loading, otherwise show paginated articles -->
      <SkeletonCard v-if="loading" v-for="n in 9" :key="n" />
      <ArticleCard
        v-else
        v-for="article in paginatedArticles"
        :key="article.id"
        :article="article"
        @selectArticle="selectArticle"
      />
    </ul>
    <!-- Pagination controls -->
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @pageChange="setPage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits, computed } from 'vue';
import ArticleCard from './ArticleCard.vue';
import SkeletonCard from './SkeletonCard.vue';
import Pagination from './Pagination.vue';
import newsService from '../services/newsService';

interface Article {
  id: string;
  url: string;
  urlToImage: string;
  title: string;
  content: string;
}

const emit = defineEmits(['selectArticle']);

const articles = ref<Article[]>([]);
const keyword = ref('');
const filteredArticles = ref<Article[]>([]);
const loading = ref(true); 
const currentPage = ref(1); 
const itemsPerPage = 9;

const fetchArticles = async () => {
  try {
    loading.value = true; 
    const response = await newsService.getTopHeadlines('br', 'general');
    articles.value = response.data.news;
    filteredArticles.value = articles.value;
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
  } finally {
    loading.value = false; 
  }
};

const filterArticles = () => {
  currentPage.value = 1; 
  if (!keyword.value) {
    filteredArticles.value = articles.value;
  } else {
    filteredArticles.value = articles.value.filter((article) =>
      article.title.toLowerCase().includes(keyword.value.toLowerCase())
    );
  }
};

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredArticles.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredArticles.value.length / itemsPerPage);
});

const setPage = (page: number) => {
  currentPage.value = page;
};

const selectArticle = (article: Article) => {
  emit('selectArticle', article);
};

onMounted(fetchArticles);
</script>
