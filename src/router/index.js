import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import { useUserStore } from '../store/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter(to, from){ 
        const exists = useUserStore.users.find(
          user => user.id === parseInt(to.params.id)
        )
        if(!exists) return {name: 'Not Found!'}
      }
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    }, 
    {
      path: "/Signup",
      name: "Signup",
      component: Signup,
    }
  ],
});

export default router;