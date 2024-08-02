<template>
  <header class="bg-black text-white shadow-md fixed w-full z-10">
    <!-- Top Bar -->
    <div class="bg-black p-4 flex justify-between items-center h-24">
      <div class="flex space-x-8 overflow-hidden whitespace-nowrap">
        <marquee behavior="scroll" direction="left" class="text-lg hidden md:flex">
          <span>NeoNews, a notícia de verdade você encontra aqui!</span>
        </marquee>
       
      </div>
      <div class="flex space-x-8 items-center mr-[3em] lg:mr-[12em]">
        <hr class="border-gray-600 h-6 hidden md:block">
        <a href="#" class="hover:text-red-500 text-lg flex items-center">
          <i class="fas fa-hashtag mr-2 lg:text-[30px] text-[15px] text-zinc-400"></i>
          <span class="lg:text-[30px] text-[15px] text-zinc-400 font-bold md:inline">SIGA-NOS</span>
        </a>
        <hr class="border-gray-600 h-6 hidden md:block">
        <a href="https://www.facebook.com/neoway.nw/" title="Curta nossa página no Facebook" class="hover:text-gray-400 lg:text-[30px] text-[15px]"><i class="fab fa-facebook-f text-zinc-400"></i></a>
        <hr class="border-gray-600 h-6 hidden md:block">
        <a href="https://x.com/neoway_oficial" title="Siga-nos no X" class="hover:text-gray-400 lg:text-[30px] text-[15px]"><i class="fab fa-x-twitter text-zinc-400"></i></a>
        <hr class="border-gray-600 h-6 hidden md:block">
        <a href="https://www.instagram.com/neowaybrasil" title="Siga-nos no Instagram" class="hover:text-gray-400 lg:text-[30px] text-[15px]"><i class="fab fa-instagram text-zinc-400"></i></a>
        <hr class="border-gray-600 h-6 hidden md:block">
        <a href="#" class="hover:text-gray-400 lg:text-[30px] text-[15px]"><i class="fab fa-tiktok text-zinc-400"></i></a>
      </div>
    </div>
    <!-- Bottom Bar -->
    <div class="bg-neoway p-4 relative h-32 flex items-center">
      <div class="absolute left-0 top-0 bottom-0 w-[250px] md:w-[510px] bg-white" style="clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);">
        <img src="https://7323764.fs1.hubspotusercontent-na1.net/hubfs/7323764/Novo%20Menu/Logotipo%20.svg" alt="NeowNews Logo" class="lg:h-full lg:w-full w-[170px] lg:ml-0 lg:mt-0 ml-[2em] mt-[1em] object-contain">
      </div>
      <div class="container mx-auto flex justify-center items-center md:space-x-8">
        <!-- Mobile menu toggle button -->
        <button @click="toggleMenu" class="block md:hidden text-xl absolute right-1 mr-[3em]">
          <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>
        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-4 md:space-x-8 text-sm md:text-lg font-bold">
          <router-link to="/news-app" class="hover:text-white text-white-500 font-bold">Notícias</router-link>
          <a href="#" class="hover:text-white font-medium">Missão</a>
          <a href="#" class="hover:text-white font-medium">Ameaças</a>
          <a href="#" class="hover:text-white font-medium">Anfitriões</a>
          <a href="#" class="hover:text-white font-medium">Especialistas</a>
          <a href="#" class="hover:text-white font-medium">Interaja</a>
          <a href="#" class="hover:text-white font-medium">Acesso Total</a>
          <a href="#" class="hover:text-white font-medium">Governo</a>
          <a href="#" class="hover:text-white font-medium">Blogs</a>
          <router-link to="/favorites" class="hover:text-white text-white-500 font-bold">Favoritos</router-link>
        </nav>
        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="fixed inset-0 bg-white flex flex-col items-center justify-center z-20 space-y-4 p-4">
          <img src="https://7323764.fs1.hubspotusercontent-na1.net/hubfs/7323764/Novo%20Menu/Logotipo%20.svg" alt="NeowNews Logo" class="w-1/2 mb-8">
          <nav class="flex flex-col space-y-4 text-lg font-bold">
            <router-link to="/" class="hover:text-gray-700 text-black font-bold">Notícias</router-link>
            <a href="#" class="hover:text-gray-700 text-black font-medium">Missão</a>
            <a href="#" class="hover:text-gray-700 text-black font-medium">Ameaças</a>
            <a href="#" class="hover:text-gray-700 text-black font-medium">Anfitriões</a>
            <a href="#" class="hover:text-gray-700 text-black font-medium">Especialistas</a>
            <a href="#" class="hover:text-gray-700 text-black font-medium">Interaja</a>
            <a href="#" class="hover:text-gray-700 text-black font-medium">Acesso Total</a>
            <a href="#" class="hover:text-gray-700 text-black font-medium">Governo</a>
            <a href="#" class="hover:text-gray-700 text-black font-medium">Blogs</a>
            <router-link to="/favorites" class="hover:text-gray-700 text-black font-bold">Favoritos</router-link>
          </nav>
          <button @click="toggleMenu" class="absolute top-4 right-4 text-xl">
            <i class="fas fa-times text-black font-medium"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
