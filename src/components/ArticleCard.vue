<template>
  <li @click="selectArticle(article)" class="cursor-pointer">
    <div class="card-container bg-white p-4 rounded shadow">
      <img
        :src="article?.image || 'https://picsum.photos/200/300'"
        :alt="article?.title"
        :title="article?.title"
        loading="lazy"
        class="w-full h-48 object-cover rounded mb-4"
      />
      <h3 class="text-lg font-bold title" :title="article?.title">
        {{ article?.title ?? "Notícia sem título" }}
      </h3>
      <hr class="my-5" />
      <span class="description" :title="article?.title">
        {{ article?.description ?? "Sem descrição disponível." }}
      </span>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

interface Article {
  url: string;
  urlToImage: string;
  title: string;
  description: string;
}

const props = defineProps<{ article: Article }>();
const emit = defineEmits(['selectArticle']);

const selectArticle = (article: Article) => {
  emit('selectArticle', article);
};
</script>

<style scoped>
.card-container {
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden; 
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  white-space: normal;
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>
