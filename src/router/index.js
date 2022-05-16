import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import AboutView from '../views/AboutView.vue'
import BuyView from '../views/BuyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/About', name: 'About', component: AboutView },
    { path: '/Buy', name: 'Buy', component: BuyView },
    // ici les autre routes
  ]
})

export default router
