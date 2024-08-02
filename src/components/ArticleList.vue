<template>
  <div class="p-4">
    <div class="relative mb-4">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          class="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-4.35-4.35M4.5 11a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
          ></path>
        </svg>
      </span>
      <input
        v-model="keyword"
        @input="filterArticles"
        placeholder="Procurar"
        class="p-2 pl-10 border rounded w-full"
      />
    </div>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SkeletonCard v-if="loading" v-for="n in 9" :key="n" />
      <ArticleCard
        v-else
        v-for="article in paginatedArticles"
        :key="article.id"
        :article="article"
        @selectArticle="selectArticle"
      />
    </ul>
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
  title: string;
  description: string;
  url: string;
  author: string;
  image: string;
  language: string;
  category: string[];
  published: string;
}

const emit = defineEmits<{ (e: 'selectArticle', article: Article): void }>();

const articles = ref<Article[]>([]);
const keyword = ref('');
const filteredArticles = ref<Article[]>([]);
const loading = ref(false);
const currentPage = ref(1);
const itemsPerPage = 9;

const fetchArticles = async (): Promise<void> => {
  loading.value = true;
  try {
    const news = await newsService.getTopHeadlines();
    if (news.length > 0) {
      articles.value = news;
      filteredArticles.value = articles.value;
    } else {
      console.warn('Nenhuma notícia encontrada ou resposta vazia.');
    }
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
  } finally {
    loading.value = false;
  }
};

const filterArticles = (): void => {
  currentPage.value = 1;
  const keywordLower = keyword.value.toLowerCase();
  filteredArticles.value = articles.value.filter((article) =>
    article.title.toLowerCase().includes(keywordLower)
  );
};

const paginatedArticles = computed<Article[]>(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredArticles.value.slice(start, start + itemsPerPage);
});

const totalPages = computed<number>(() => {
  return Math.ceil(filteredArticles.value.length / itemsPerPage);
});

const setPage = (page: number): void => {
  currentPage.value = page;
};

const selectArticle = (article: Article): void => {
  emit('selectArticle', article);
};

onMounted(fetchArticles);
</script>
