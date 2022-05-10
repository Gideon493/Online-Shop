import { createRouter, createWebHistory } from 'vue-router'

import shop from '../views/shop.vue'
import cart from '../views/cart.vue'
import about from '../views/about.vue'





const routes = [
  
  {
    path: '/shop',
    name: 'shop',
    component:shop
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component:cart
  },
  {
    path: '/about',
    name: 'about',
    component:about
  }
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
