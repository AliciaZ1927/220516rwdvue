import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import IndexView from '../views/IndexView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import ContactView from '../views/ContactView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'

import MemberView from '../views/MemberView.vue'
import CartView from '../views/CartView.vue'
import FavoriteView from '../views/FavoriteView.vue'






const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexView
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: FavoriteView
  },
  {
    path: '/member',
    name: 'Member',
    component: MemberView,
    meta: {protectedRoute: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const routeprotected = to.matched.some(item => item.meta.protectedRoute)
  if(routeprotected && store.state.token === null){
    next('/')
  } else {
    next()
  }
})

export default router
