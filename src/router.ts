import Vue from 'vue';
import Router from 'vue-router';
import App from '@/app.vue';
import Home from './views/home/home.vue';
import Login from './views/login/login.vue';
import About from './views/about/about.vue';
import store from '@/store';
import { AuthService } from '@/services/auth/auth.service';
import { UserService } from '@/services/user/user.service';

Vue.use(Router);

const authService = new AuthService();
const userService = new UserService();

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      redirect: '/home',
      name: 'auth',
      component: {
        render(c) { return c('router-view'); },
      },
      beforeEnter: (to, from, next) => {
        if (!store.state.user) {
          const token = localStorage.getItem('token');
          if (!token) {
            next('login');
          } else {
            userService.getUser(1).subscribe(() => next());
          }
        } else {
          next();
        }
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
      ],
    },
  ],
});
