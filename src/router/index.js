import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/:name/:id', // va a recibir 2 parametros dinamicos: nombre de ciudad e id
    name: 'City',
    component: () => import('@/views/CityView.vue'),
    props: true,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
