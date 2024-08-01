<template>
  <li @click="selectArticle(article)" class="cursor-pointer">
    <div class="bg-white p-4 rounded shadow">
      <img
        :src="article?.urlToImage || 'https://picsum.photos/200/300'"
        alt="Article Image"
        class="w-full h-48 object-cover rounded mb-4"
      />
      <h3 class="text-lg font-bold">
        {{ article?.title ?? "Notícia sem título" }}
      </h3>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

interface Article {
  url: string;
  urlToImage: string;
  title: string;
  content: string;
}

const props = defineProps<{ article: Article }>();
const emit = defineEmits(['selectArticle']);

const selectArticle = (article: Article) => {
  emit('selectArticle', article);
};
</script>
