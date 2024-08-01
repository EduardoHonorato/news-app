<template>
    <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="close">
      <div class="bg-white p-8 rounded shadow-lg w-11/12 md:w-2/3 lg:w-1/2 relative">
        <button @click="close" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800">&times;</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    visible: Boolean
  });
  
  const emit = defineEmits(['close']);
  
  const close = () => {
    emit('close');
  };
  </script>
  