import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home/Home.vue';
import Favorite from '../views/Favorite/Favorite.vue';
import DogGridBreed from '../views/DogGridBreed/DogGridBreed.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dogs/:breed',
    name: 'DogGridBreed',
    component: DogGridBreed,
  },
  {
    path: '/favorites',
    name: 'Favorite',
    component: Favorite,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
