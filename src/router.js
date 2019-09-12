import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import User from './views/User.vue'
import Category from './views/Category.vue'
import Product from './views/Product.vue'
import Categories from './views/Categories.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    { path: '/user/:id', component: User
    },
    {
      path: '/category/:id',
      component: Category
    },
    {
      path: '/product/:id',
      component: Product
  },
  {
    path: '/categories',
    component: Categories
  }
  ]
})
