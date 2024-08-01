<template>
  <div class="lg:grid inline-flex grid-cols-1 lg:grid-cols-2">
    <!-- Banner Principal -->
    <div class="relative col-span-2 lg:col-span-1 lg:h-[778px] my-[13.4em]">
      <div
        v-for="(article, index) in mainArticle"
        :key="index"
        :class="[
          'absolute inset-0 transition-opacity duration-1000 ease-in-out',
          { 'opacity-0': currentIndex !== index, 'opacity-100': currentIndex === index },
        ]"
      >
        <img :src="article.image" alt="Article Image" class="object-cover w-full h-full filter brightness-50">
        <div class="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent p-6 flex flex-col justify-end">
          <div class="text-white">
            <span class="bg-neoway text-sm px-2 py-1">{{ article.category }}</span>
            <h2 class="text-3xl font-bold mt-2">{{ article.title }}</h2>
            <p class="mt-2">{{ article.author }}</p>
            <p class="mt-1 text-sm">{{ article.publishedAt }}</p>
            <button class="mt-5"><a href="#" class="hover:text-gray-400 text-[20px] font-bold"><i class="fa fa-earth-americas text-white-400 "></i> <u>VER NOTÍCIA</u></a></button>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 flex items-center justify-between px-4">
        <button @click="prevSlide" class="text-white bg-black bg-opacity-50 px-2 py-1">‹</button>
        <button @click="nextSlide" class="text-white bg-black bg-opacity-50 px-2 py-1">›</button>
      </div>
    </div>
    <!-- Banners Secundários -->
    <div class="block lg:grid-cols-1 mt-[14em]">
      <div
        v-for="(article, index) in secondaryArticles"
        :key="index"
        class="relative lg:h-[384px] h-[265px]"
      >
        <img :src="article.image" alt="Article Image" class="object-cover w-full h-full filter brightness-50">
        <div class="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent p-6 flex flex-col justify-end">
          <div class="text-white">
            <span class="bg-neoway text-sm px-2 py-1">{{ article.category }}</span>
            <h2 class="text-xl font-bold mt-2">{{ article.title }}</h2>
            <p class="mt-2">{{ article.author }}</p>
            <p class="mt-1 text-sm">{{ article.publishedAt }}</p>
            <button class="mt-5"><a href="#" class="hover:text-gray-400 text-[20px] font-bold"><i class="fa fa-forward text-white-400 "></i> <u>VER NOTÍCIA</u></a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mainArticle = ref([
  {
    image: 'https://s2-home-globo.glbimg.com/wHXS60K9tv3Mk50u1ITFOKTHBdw=/0x0:638x359/fit-in/515x290/middle/smart/filters:strip_icc():strip_exif()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/U/F/rNuUH8SWmmryKvoCqBXQ/thumbnail-image001-3-.jpg', // Substitua com a URL da imagem da notícia
    category: 'MUNDO',
    title: 'Líder supremo do Irã ordena ataque direto a Israel, diz jornal',
    author: 'Eduardo Honorato',
    publishedAt: '6 horas atrás'
  }
]);

const secondaryArticles = ref([
  {
    image: 'https://s2-home-globo.glbimg.com/Tv90WO4gRnzpvlk4AQFY2BmJ0Rs=/459x70:2963x1479/fit-in/515x290/middle/smart/filters:strip_icc():strip_exif()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/z/6/MUg4L2QGSNxtuN5W090A/2024-07-30t174843z-1284926722-up1ek7u1dh6qu-rtrmadp-3-olympics-2024-artisticgymnastics.jpg',
    category: 'ESPORTES',
    title: 'Final da ginástica e Mayra Aguiar do judô; confira a agenda do Brasil nesta 5ª',
    author: 'Eduardo Souza',
    publishedAt: '3 horas atrás'
  },
  {
    image: 'https://s2-home-globo.glbimg.com/YjNrjTW-roKD6AjZvCb869FRWKs=/330x279:882x589/fit-in/515x290/middle/smart/filters:strip_icc():strip_exif()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/j/d/B5AXjnRLGF72xsGJ6oXg/107740738-venezuelan-president-and-presidential-candidate-nicolas-maduro-gestures-during-a-campa.jpg',
    category: 'POLÍTICA',
    title: 'Casa Branca afirma estar perdendo paciência com Venezuela após eleição',
    author: 'Eduardo Honorato',
    publishedAt: '6 horas atrás'
  }
]);

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % mainArticle.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + mainArticle.value.length) % mainArticle.value.length;
};

onMounted(() => {
  setInterval(() => {
    nextSlide();
  }, 5000);
});
</script>

<style scoped>
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
</style>
