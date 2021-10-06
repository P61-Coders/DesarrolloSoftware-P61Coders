import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import decode from 'jwt-decode'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/frutas',
    name: 'Frutas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Frutas.vue')
  },
  {
    path: '/verduras',
    name: 'Verduras',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Verduras.vue')
  },{
    path: '/exoticas',
    name: 'Exoticas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Exoticas.vue')
  },
  {
    path: '/carrito',
    name: 'Carrito',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Carrito.vue')
  },

  {
    path: '/login',
    name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    meta:{requiresAuth:true },
    children:[{
        path: 'usuario', //pendiente aca con el nombre
        name: 'Usuario',
      },
      {
        path: 'articulos', //pendiente aca con el nombre
        name: 'Articulos',
      },
      {
        path: 'categorias', //pendiente aca con el nombre
        name: 'Categorias',
      }
      ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let token = decode(localStorage.getItem('token'));
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
        
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
