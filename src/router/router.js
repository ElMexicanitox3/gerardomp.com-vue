import { createRouter, createWebHistory } from 'vue-router';

// Importa tus componentes
import Home from '../views/home/home.vue';
// import About from '@/views/About.vue';
// import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // Componente para la página principal
  },
//   {
//     path: '/about',
//     name: 'About',
//     component: About, // Componente para la página "About"
//   },
//   {
//     path: '/:pathMatch(.*)*',
//     name: 'NotFound',
//     component: NotFound, // Página 404
//   },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Usar el modo de historial
  routes, // Define las rutas
});

export default router;
