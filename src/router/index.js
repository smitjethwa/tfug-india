import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'TFUG India Summit',
      color: 'white'
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue'),
    meta: {
      title: 'Team | TFUG India Summit',
      color: 'white'
    }
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue'),
    meta: {
      title: 'Speakers | TFUG India Summit',
      color: 'white'
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue'),
    meta: {
      title: 'FAQ | TFUG India Summit',
      color: 'white'
    }
  }
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue'),
  //   meta: {
  //     title: 'Register | TFUG India Summit',
  //     color: 'white'
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
