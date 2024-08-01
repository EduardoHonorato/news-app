import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Favorites from '../views/Favorites.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/mundo', component: Home },
  { path: '/politica', component: Home },
  { path: '/negocios', component: Home },
  { path: '/tecnologia', component: Home },
  { path: '/esportes', component: Home },
  { path: '/entretenimento', component: Home },
  { path: '/saude', component: Home },
  { path: '/favorites', component: Favorites }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
