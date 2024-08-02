<template>
    <div class="skeleton-medal-table">
      <h2 class="text-xl font-bold mb-4">Quadro de medalhas 🥇🥈🥉</h2>
      <table class="w-full text-left table-auto">
        <thead>
          <tr class="border-b">
            <th class="py-2">#</th>
            <th class="py-2">Países</th>
            <th class="py-2">🥇</th>
            <th class="py-2">🥈</th>
            <th class="py-2">🥉</th>
            <th class="py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 5" :key="n" class="border-b animate-pulse">
            <td class="py-2 skeleton-box"></td>
            <td class="py-2 flex items-center">
              <div class="skeleton-flag mr-2"></div>
              <div class="skeleton-box" style="width: 60%;"></div>
            </td>
            <td class="py-2 skeleton-box"></td>
            <td class="py-2 skeleton-box"></td>
            <td class="py-2 skeleton-box"></td>
            <td class="py-2 skeleton-box"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .skeleton-medal-table {
    background-color: #ffffff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .skeleton-box {
    width: 24px;
    height: 16px;
    background-color: #e0e0e0;
    border-radius: 4px;
  }
  
  .skeleton-flag {
    width: 24px;
    height: 16px;
    background-color: #e0e0e0;
    border-radius: 2px;
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
  