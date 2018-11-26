import Vue from 'vue';
import Router from 'vue-router';
import IndexLunbo from '@/components/IndexLunbo'

import Dangdiyou from '@/components/dangdiyou/Dangdiyou'
import Travelcont from '@/components/Travelcont'
import Next from '@/components/Next'
import Login from '@/components/Login'
import Register from '@/components/register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'IndexLunbo',
      component: IndexLunbo
    },
    {
      path: '/next',
      name: 'Next',
      component: Next
    },
    {
      path: '/local',
      name: 'Dangdiyou',
      component: Dangdiyou
     },
     {
      path: '/travelcont',
      name: 'Travelcont',
      component: Travelcont
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
