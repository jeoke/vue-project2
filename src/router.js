import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/work',
      name: 'work',
      component: () => import('./views/Work.vue')
    },
    {
      path:'/process/',
      redirect: '/process/NativeJs'
    },
    {
      path: '/process/',
      name: 'process',
      component: () => import('./views/Process.vue'),
      children: [
        {
          path: 'Nativejs',
          name: 'NativeJs',
          component: () => import('./components/nativeJs.vue')
        }, {
          path: 'reactUse',
          name: 'react',
          component: () => import('./components/reactUse.vue')
        }, {
          path: 'vueUse',
          name: 'vue',
          component: () => import('./components/vueUse.vue')
        }, {
          path: 'WeexUse',
          name: 'weex',
          component: () => import('./components/WeexUse.vue')
        }, {
          path: 'service side',
          name: 'service',
          component: () => import('./components/serviceSide.vue')
        }
      ]
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('./views/Services.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
