import Vue from 'vue';
import Router from 'vue-router';
import Home from './features/home/home-section/home-section.vue';
import About from './features/about/about-section/about-section.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
