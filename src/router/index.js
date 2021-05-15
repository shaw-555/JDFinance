import Vue from 'vue'
import Router from 'vue-router'
import TheHome from '../home/index.vue'
import Money from '../money/index.vue'
import Ious from '../ious/index.vue'
import Rise from '../rise/index.vue'
import Download from '../special/Download.vue'
import '../assets/styles/reset.scss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome
    },
    {
      path: '/money',
      name: 'money',
      component: Money
    },
    {
      path: '/ious',
      name: 'ious',
      component: Ious
    },
    {
      path: '/rise',
      name: 'rise',
      component: Rise
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    }
  ]
})
