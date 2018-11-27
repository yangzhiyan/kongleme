import Vue from 'vue';
import Router from 'vue-router';
import IndexLunbo from '@/components/IndexLunbo'

import Dangdiyou from '@/components/dangdiyou/Dangdiyou'
import Travelcont from '@/components/Travelcont'
import Next from '@/components/Next'
import Login from '@/components/Login'
import Register from '@/components/register/Register'
<<<<<<< HEAD
import Dangdiyou from '@/components/dangdiyou/Dangdiyou'
import Details from '@/components/dangdiyou/Details'
=======

>>>>>>> 01f7d759f3311c10b5b44f405a0d544734652904
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

<<<<<<< HEAD
    },
    {
    	path:'/detail',
    	name:'Details',
    	component:Details
    },
    {
    	path:'/Travelcont',
    	name:'Travelcont',
    	component:Travelcont
=======
>>>>>>> 01f7d759f3311c10b5b44f405a0d544734652904
    }
    
  ]
})
