import Vue from 'vue'
import Router from 'vue-router'
import Datalist from '@/components/Datalist'
import Bijiao from '@/components/Bijiao'
import Add from '@/components/Add'
import Map from '@/components/Map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Datalist
    },
    {
      path: '/index',
      component: Datalist
    },
    {
      path: '/bijiao',
      component: Bijiao
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/map',
      component: Map
    }
  ]
})
