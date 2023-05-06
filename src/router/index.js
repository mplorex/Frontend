import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Account from "../components/Account.vue"
import { useUserStore } from '../store/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter(to, from){ 
        const store = useUserStore()

        if (to.meta.requiresAuth && !store.isAuth) return '/login'
      },
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      beforeEnter(to, from){ 
        const store = useUserStore()

        if (store.isAuth) return '/'
      }
    }, 
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
      beforeEnter(to, from){ 
        const store = useUserStore()

        if (store.isAuth) return '/'
      }
    },
    {
      path: "/account",
      name: "Account",
      component: Account
    }
  ],
});

export default router;