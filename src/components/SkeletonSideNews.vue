<template>
    <div class="mb-4 flex border-b pb-4 cursor-pointer animate-pulse">
      <div class="skeleton-image rounded mr-4"></div>
      <div class="flex-grow">
        <div class="skeleton-text title mb-2"></div>
        <div class="skeleton-text description"></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // No script logic needed for skeletons
  </script>
  
  <style scoped>
  .skeleton-image {
    width: 96px; /* Match the width of the actual image */
    height: 96px; /* Match the height of the actual image */
    background-color: #e0e0e0;
    border-radius: 8px;
  }
  
  .skeleton-text {
    width: 80%;
    height: 16px; /* Standard text height */
    background-color: #e0e0e0;
    border-radius: 4px;
  }
  
  .title {
    height: 20px; /* Slightly taller for the title */
  }
  
  .description {
    height: 16px; /* Match the description text height */
    width: 100%; /* Full width for description */
  }
  
  .animate-pulse {
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  </style>
  