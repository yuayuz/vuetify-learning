import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import VBottomSheet from '@/views/Containment/VBottomSheet.vue'
import Button from '@/views/Containment/ButtonView.vue'
import ButtonView from '@/views/Containment/ButtonView.vue'

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
    },
    {
      path: '/ButtonView',
      name: 'ButtonView',
      component: ButtonView
    }
  ]
})

export default router
