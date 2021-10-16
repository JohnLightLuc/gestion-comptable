import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Achat from '../views/Achat.vue'
import Vente from '../views/Vente.vue'
import Paye from '../views/Paye.vue'
import Od from '../views/Od.vue'
import Banque from '../views/Banque.vue'
import Balance from '../views/Balance.vue'
import Livre from '../views/Livre.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },

  {
    path: '/:id/compte-achats',
    name: 'Achat',
    component: Achat,
    props:  true
  },

  {
    path: '/:id/compte-ventes',
    name: 'Vente',
    component: Vente,
    props: true
  },
  {
    path: '/:id/compte-payements',
    name: 'Paye',
    component: Paye,
    props: true
  },
  {
    path: '/:id/compte-banque',
    name: 'Banque',
    component: Banque
  },
  {
    path: '/:id/compte-operations-diverses',
    name: 'Od',
    component: Od,
    props: true
  },
  {
    path: '/balance',
    name: 'Balance',
    component: Balance
  },
  {
    path: '/le-grand-livre',
    name: 'Livre',
    component: Livre
  },
  {
    path: '/mon-profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
