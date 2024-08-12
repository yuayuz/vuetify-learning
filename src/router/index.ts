import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import VBottomSheet from '@/views/Containment/VBottomSheet.vue'
import Button from '@/views/Containment/ButtonView.vue'
import ButtonView from '@/views/Containment/ButtonView.vue'
import CardView from '@/views/Containment/CardView.vue'
import ChipView from '@/views/Containment/ChipView.vue'
import DialogsView from '@/views/Containment/DialogsView.vue'
import Dividers from '@/views/Containment/Dividers.vue'
import ExpansionPanels from '@/views/Containment/ExpansionPanels.vue'

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
    },
    {
      path: '/CardView',
      name: 'CardView',
      component: CardView
    },
    {
      path: '/ChipView',
      name: 'ChipView',
      component: ChipView
    },
    {
      path: '/DialogsView',
      name: 'DialogsView',
      component: DialogsView
    },
    {
      path: '/Dividers',
      name: 'Dividers',
      component: Dividers
    },
    {
      path: '/ExpansionPanels',
      name: 'ExpansionPanels',
      component: ExpansionPanels
    }
  ]
})

export default router
