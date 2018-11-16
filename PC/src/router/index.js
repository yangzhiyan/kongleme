import Vue from 'vue';
import Router from 'vue-router';
import IndexLunbo from '@/components/IndexLunbo'
import Headernav from '@/components/Headernav'
import Footer1 from '@/components/Footer1'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'IndexLunbo',
      component: IndexLunbo
    },
    {
      path: '/header',
      name: 'Headernav',
      component: Headernav
    },
    {
      path: '/ft',
      name: 'Footer1',
      component: Footer1
    }
    
  ]
})
