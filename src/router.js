import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "list",
          name: "home-list",
          component: () => import('./views/List.vue')
        },
        {
          path: "personal-info",
          name: "home-personal-info",
          component: () => import('./views/PersonalInfo.vue')
        }
      ]
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue')
    }*/
  ]
})
