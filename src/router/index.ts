import { createRouter, createWebHistory } from 'vue-router';
import ProjectView from '@/views/projectView.vue';
import HomeView from '@/views/homeView.vue';

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
      name: 'project-details',
      component: ProjectView,
    },
  ],
});

export default router;
