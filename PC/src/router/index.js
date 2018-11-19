import Vue from 'vue';
import Router from 'vue-router';
import IndexLunbo from '@/components/IndexLunbo'

import Headernav from '@/components/Headernav'
import Footer1 from '@/components/Footer1'
import Next from '@/components/Next'
import Login from '@/components/Login'
import Register from '@/components/register/Register'
import Dangdiyou from '@/components/Dangdiyou/Dangdiyou'
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
    	path:'/localdeals',
    	name:'Dangdiyou',
    	component:Dangdiyou
    },
    {
    	path:'/gonglve',
    	name:'Next',
    	component:Next
    },
    {
      path: '/ft',
      name: 'Footer1',
      component: Footer1
		 },
		 {
      path: '/reg',
      name: 'Register',
      component: Register
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login

    }
    
  ]
})
