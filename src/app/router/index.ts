import { createRouter, createWebHistory } from 'vue-router'
import { LoginPage } from '@/pages/LoginPage/index'
import { SignupPage } from '@/pages/SignupPage/index'
import HomePage from "@/app/App.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      component: HomePage,
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/signup',
      component: SignupPage
    },
  ],
})

export default router
