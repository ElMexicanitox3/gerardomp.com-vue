import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/home/home.vue';
import Privacy from '../views/notehub/privacy.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/notehub/privacy', name: 'Privacy', component: Privacy },
  ],
});

export default router;

