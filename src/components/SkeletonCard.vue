<template>
    <li class="skeleton-card cursor-pointer">
      <div class="card-container bg-white p-4 rounded shadow animate-pulse">
        <div class="skeleton-image mb-4"></div>
        <div class="skeleton-text h-4 mb-2"></div>
        <div class="skeleton-text h-4 mb-2"></div>
        <div class="skeleton-text h-4"></div>
      </div>
    </li>
  </template>
  
  <script setup lang="ts">
  // No script logic is needed for skeletons, just presentation
  </script>
  
  <style scoped>
  .skeleton-card {
    list-style: none;
  }
  
  .card-container {
    height: 400px; /* Match the height of the actual card */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .skeleton-image {
    width: 100%;
    height: 192px; /* Match the height of the article image */
    background-color: #e0e0e0;
    border-radius: 8px;
  }
  
  .skeleton-text {
    width: 80%;
    background-color: #e0e0e0;
    border-radius: 4px;
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
  