import { createRouter, createWebHistory } from 'vue-router'
import InscriptionView from '../views/InscriptionView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import AccueilView from '../views/AccueilView.vue'
import EvenementsView from '../views/EvenementsView.vue'
import DescripView from '../views/DescripView.vue'
import UserRegister from '@/views/UserRegister.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: UserRegister
    },
    
    {
      path: '/inscription',
      name: 'inscription',
      component: InscriptionView
    },
    {
      path: '/',
      name: 'PageAccueil',
      component: AccueilView
    },
    {
      path: '/evenements',
      name: 'evenementsPre',
      component: EvenementsView
    },
    
    {
      path: '/evenements/:id',
      name: 'descripEvent',
      component: DescripView
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: ConnexionView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
