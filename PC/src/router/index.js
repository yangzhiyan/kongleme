import Vue from 'vue';
import Router from 'vue-router';
import Bkrmlxj from '@/components/Bkrmlxj';
import HelloWorld from '@/components/HelloWorld'
import IndexLunbo from '@/components/IndexLunbo'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rm',
      name: 'Bkrmlxj',
      component: Bkrmlxj
    },
    {
      path: '/',
      name: 'IndexLunbo',
      component: IndexLunbo
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    }
    
  ]
})
