import { createRouter, createWebHistory } from 'vue-router';
import summaryView from '../views/summaryView.vue';
import projectsView from '@/views/projectsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: summaryView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: projectsView,
    },
  ],
});

export default router;
