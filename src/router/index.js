import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Favorites from '../views/Favorites.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/mundo', component: Home }, // Exemplo de reutilização de componente
  { path: '/politica', component: Home }, // Exemplo de reutilização de componente
  { path: '/negocios', component: Home }, // Exemplo de reutilização de componente
  { path: '/tecnologia', component: Home }, // Exemplo de reutilização de componente
  { path: '/esportes', component: Home }, // Exemplo de reutilização de componente
  { path: '/entretenimento', component: Home }, // Exemplo de reutilização de componente
  { path: '/saude', component: Home }, // Exemplo de reutilização de componente
  { path: '/favorites', component: Favorites }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
