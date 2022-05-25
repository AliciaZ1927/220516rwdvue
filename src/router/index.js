import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import ContactView from '../views/ContactView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router