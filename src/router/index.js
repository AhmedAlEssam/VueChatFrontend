import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import http from "@/helpers/http";

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

// Middleware
router.beforeEach(async (to, from, next) => {
  try {
    if (JSON.parse(localStorage.getItem("user")) && localStorage.getItem("accessToken")) {
      let u = JSON.parse(localStorage.getItem("user"));
      if (u.email) {
        let storedEmail = await JSON.parse(localStorage.getItem("user"));
        storedEmail = storedEmail.email;
        if (localStorage.getItem("accessToken")) {
          await http.get('/auth/me', { email: storedEmail }).then((res) => {
            if (to.name == "login") {
              router.push({ name: "home" });
            }
          })
        }
      }
    } else
      if (to.name != "login" || to == null)
        router.push({ name: "login" });
    next();
  } catch (e) {
    if (to.name != "login")
      router.push({ name: "login" });
    next();
  }
});

export default router
