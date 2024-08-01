<template>
  <header class="bg-black text-white shadow-md fixed w-full z-10 h-36">
    <!-- Top Bar -->
    <div class="bg-black p-4 flex justify-between items-center h-24">
      <div class="flex space-x-8">
        <marquee behavior="scroll" direction="left" class="flex space-x-8 text-lg">
          <span>A surprising way to think about slavery </span>
          <span>The lawyer who said no </span>
          <span>NYC attorney: "We run the country"</span>
        </marquee>
      </div>
      <div class="flex space-x-8 items-center mr-[10em]">
        <hr class="border-gray-600 h-6">
        <a href="#" class="hover:text-red-500 text-lg flex items-center">
          <i class="fas fa-hashtag mr-2 text-[30px] text-zinc-400"></i> <span class="text-[30px] text-zinc-400 font-bold">SIGA-NOS</span></a>
        <a href="#" class="hover:text-gray-400 text-[30px] divide-x"><i class="fab fa-facebook-f text-zinc-400"></i></a>
        <hr class="border-gray-600 h-6">
        <a href="#" class="hover:text-gray-400 text-[30px]"><i class="fab fa-twitter text-zinc-400"></i></a>
        <hr class="border-gray-600 h-6">
        <a href="#" class="hover:text-gray-400 text-[30px]"><i class="fab fa-instagram text-zinc-400"></i></a>
        <hr class="border-gray-600 h-6">
        <a href="#" class="hover:text-gray-400 text-[30px]"><i class="fab fa-tiktok text-zinc-400"></i></a>
      </div>
    </div>
    <!-- Bottom Bar -->
    <div class="bg-neoway p-4 relative h-32 flex items-center">
      <div class="absolute left-0 top-0 bottom-0 w-[510px] bg-white" style="clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);">
        <img src="https://7323764.fs1.hubspotusercontent-na1.net/hubfs/7323764/Novo%20Menu/Logotipo%20.svg" alt="NeowNews Logo" class="h-full w-full object-contain">
      </div>
      <div class="container mx-auto flex justify-center items-center space-x-8">
        <nav class="flex space-x-8 text-lg font-bold">
          <router-link to="/" class="hover:text-white text-white-500 font-bold">Notícias</router-link>
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
      
      </div>
    </div>
  </header>
</template>