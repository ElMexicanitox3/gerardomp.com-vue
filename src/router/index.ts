import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../features/home/views/homeView.vue';
import projectView from '@/features/project/views/projectView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project/:name',
      name: 'project',
      component: projectView,
    },
    {
      path: '/project/:name/privacy-policy',
      name: 'privacy-policy',
      component: projectView, // Ira privacy view
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
