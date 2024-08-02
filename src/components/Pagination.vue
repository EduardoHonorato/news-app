<template>
  <nav aria-label="Page navigation" class="flex justify-center mt-12">
    <ul class="flex items-center space-x-2 h-12 text-base">
      <li>
        <button
          @click="goToPreviousPage"
          :disabled="isFirstPage"
          class="flex items-center justify-center px-4 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="w-3 h-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
      </li>
      <li v-for="page in totalPages" :key="page">
        <button
          @click="goToPage(page)"
          :class="buttonClasses(page)"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button
          @click="goToNextPage"
          :disabled="isLastPage"
          class="flex items-center justify-center px-4 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span class="sr-only">Next</span>
          <svg
            class="w-3 h-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const props = defineProps<PaginationProps>();
const emit = defineEmits<{ (e: 'pageChange', page: number): void }>();

const goToPage = (page: number): void => {
  if (page !== props.currentPage) {
    emit('pageChange', page);
  }
};

const goToPreviousPage = (): void => {
  if (props.currentPage > 1) {
    emit('pageChange', props.currentPage - 1);
  }
};

const goToNextPage = (): void => {
  if (props.currentPage < props.totalPages) {
    emit('pageChange', props.currentPage + 1);
  }
};

const isFirstPage = computed(() => props.currentPage === 1);
const isLastPage = computed(() => props.currentPage === props.totalPages);

const buttonClasses = (page: number): string => {
  return page === props.currentPage
    ? 'z-10 flex items-center justify-center px-4 h-12 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
    : 'flex items-center justify-center px-4 h-12 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
};
</script>
