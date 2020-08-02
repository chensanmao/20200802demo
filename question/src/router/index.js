import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/index.vue'
import Edit from '../components/edit.vue'

import Home from '../components/pages/home.vue'
import Order from '../components/pages/order.vue'
import Mine from '../components/pages/mine.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/order',
          component: Order,
        },
        {
          path: '/mine',
          component: Mine
        },

      ],

    },
    {
      path: '/edit',
      component: Edit
    },

    {
      path: '*',
      redirect: '/home'
    }
  ]
})
