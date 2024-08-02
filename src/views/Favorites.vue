<template>
  <div>
    <Header />
    <div class="container mx-auto p-4">
      <h1
        v-if="favorites.length === 0"
        class="text-2xl font-bold text-center my-20 mt-[15em]"
      >
        Não há nenhuma notícia favorita ainda!
      </h1>
      <ul
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[15em]"
      >
        <li
          v-for="article in favorites"
          :key="article.url"
          @click="openModal(article)"
          class="cursor-pointer"
        >
          <div class="card-container bg-white p-4 rounded shadow">
            <img
              :src="article.image || 'https://picsum.photos/200/300'"
              :alt="article.title"
              :title="article.title"
              class="w-full h-48 object-cover rounded mb-4"
            />
            <h3 class="text-lg font-bold title" :title="article.title">
              {{ article.title ?? "Notícia sem título" }}
            </h3>
            <hr class="my-5" />
            <span class="description" :title="article.title">
              {{ article.description ?? "Sem descrição disponível." }}
            </span>
            <br />
            <button
              @click.stop="removeFavorite(article)"
              class="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Remover Favorito
            </button>
          </div>
        </li>
      </ul>
    </div>

    <Modal :visible="isModalVisible" @close="closeModal">
      <div v-if="selectedArticle">
        <img
          :src="selectedArticle.image || 'https://via.placeholder.com/150'"
          alt="Article Image"
          class="w-full object-cover rounded mb-4"
        />
        <h2 class="text-2xl font-bold mb-2">{{ selectedArticle.title }}</h2>
        <p>{{ selectedArticle.description }}</p>
        <button
          @click="addFavorite"
          class="mt-4 px-4 py-2 text-white rounded font-semibold"
          :class="{ 'bg-green-600': isFavorited, 'bg-blue-500': !isFavorited }"
        >
          {{ isFavorited ? 'Favoritado ♥' : 'Favoritar' }}
        </button>
      </div>
    </Modal>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Modal from '../components/Modal.vue';

interface Article {
  title: string;
  description: string;
  url: string;
  image: string;
}

const favorites = ref<Article[]>(JSON.parse(localStorage.getItem('favorites') || '[]'));

const selectedArticle = ref<Article | null>(null);
const isModalVisible = ref(false);
const isFavorited = ref(false);

const openModal = (article: Article): void => {
  selectedArticle.value = article;
  isFavorited.value = favorites.value.some((fav: Article) => fav.url === article.url);
  isModalVisible.value = true;
};

const closeModal = (): void => {
  isModalVisible.value = false;
};

const removeFavorite = (article: Article): void => {
  favorites.value = favorites.value.filter(fav => fav.url !== article.url);
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
  if (selectedArticle.value?.url === article.url) {
    closeModal();
  }
};

const addFavorite = (): void => {
  if (selectedArticle.value && !favorites.value.some(fav => fav.url === selectedArticle.value.url)) {
    favorites.value.push(selectedArticle.value);
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
    isFavorited.value = true;
  }
};
</script>