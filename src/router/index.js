import { createRouter, createWebHistory } from 'vue-router'
import InscriptionView from '../views/InscriptionView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import AccueilView from '../views/AccueilView.vue'
import EvenementsView from '../views/EvenementsView.vue'
import DescripView from '../views/DescripView.vue'
import UserRegister from '@/views/UserRegister.vue'
import AjouterCategorie from '../views/AjouterCategorie.vue'
import AjouterVille from '@/views/AjouterVille.vue'
import AjouterEvent from '@/views/AjouterEvent.vue'
import ListeCategories from '@/views/ListeCategories.vue'
import ListeVisiteurs from '@/views/ListeVisiteurs.vue'
import ListeEvents from '@/views/ListeEvents.vue'
import ListeVilles from '@/views/ListeVilles.vue'
import Dashboard from '@/views/Dashboard.vue'
import ModifierCategorie from '@/views/ModifierCategorie.vue'
import ModifierVille  from '/home/adna/Documents/projest_mémoire/myDashboard/src/views/ModifierVille .vue'
import ModifierEvent  from '/home/adna/Documents/projest_mémoire/myDashboard/src/views/ModifierEvent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: UserRegister
    },
    {
      path: '/ajoutercategorie',
      name: 'ajouterCategorie',
      component: AjouterCategorie
    },
    {
      path: '/ajouterville',
      name: 'ajouterVille',
      component: AjouterVille
    },
    {
      path: '/ajouterevent',
      name: 'ajouterEvent',
      component: AjouterEvent
    },
    { 
      path: '/categories/:id/edit',
      name: 'modifierCategorie',
      component: ModifierCategorie
    },
    { 
      path: '/villes/:id/edit',
      name: 'modifierVille',
      component: ModifierVille 
    },
    {
      path: '/evenements/:id/edit',
      name: 'modifierEvent',
      component: ModifierEvent
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/listeevents',
      name: 'listeEvents',
      component: ListeEvents
    },
    {
      path: '/listecategories',
      name: 'listeCategories',
      component: ListeCategories
    },
    {
      path: '/listevisiteurs',
      name: 'listevisiteurs',
      component: ListeVisiteurs
    },
    {
      path: '/listevilles',
      name: 'listeVilles',
      component: ListeVilles
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: InscriptionView
    },
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
      path: '/evenements',
      name: 'evenements',
      component: EvenementsView
    },
    
    {
      path: '/descrip',
      name: 'descrip',
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
