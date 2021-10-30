import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Balance from '../views/Balance.vue'
import Livre from '../views/Livre.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Operations from '../views/Operations.vue'
import PlanComptable from '../views/PlanComptable.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
    beforeEnter: (to, from, next) =>{
      if (!localStorage.getItem('token')) {
        next('/login')
      }else{ 
        next()
      }
    }
  },

  {
    path: '/:id/:type',
    name: 'Operations',
    component: Operations,
    props:  true,
    beforeEnter: (to, from, next) =>{
      if (!localStorage.getItem('token')) {
        next('/login')
      }else{ 
        next()
      }
    }
  },
  {
    path: '/plan-comptable',
    name: 'PlanComptable',
    component: PlanComptable,
    beforeEnter: (to, from, next) =>{
      if (!localStorage.getItem('token')) {
        next('/login')
      }else{ 
        next()
      }
    }
  },
  {
    path: '/balance',
    name: 'Balance',
    component: Balance,
    beforeEnter: (to, from, next) =>{
      if (!localStorage.getItem('token')) {
        next('/login')
      }else{ 
        next()
      }
    }
  },
  {
    path: '/le-grand-livre',
    name: 'Livre',
    component: Livre,
    beforeEnter: (to, from, next) =>{
      if (!localStorage.getItem('token')) {
        next('/login')
      }else{ 
        next()
      }
    }
  },
  {
    path: '/mon-profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: (to, from, next) =>{
      if (!localStorage.getItem('token')) {
        next('/login')
      }else{ 
        next()
      }
    }
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
