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
