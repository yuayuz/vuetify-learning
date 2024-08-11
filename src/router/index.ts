import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import VBottomSheet from '@/views/Containment/VBottomSheet.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/VBottomSheet',
      name: 'VBottomSheet',
      component: VBottomSheet
    }
  ]
})

export default router
