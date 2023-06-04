import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: LoginView,
        login: LoginView

      }
    },
    {
      path: '/signup',
      name: 'signup',
      components: {
        default: LoginView,
        login: LoginView

      }
    }
  ]
})

export default router
