import Vue from 'vue';
import Router from 'vue-router';
import IndexLunbo from '@/components/IndexLunbo'
<<<<<<< HEAD
import Headernav from '@/components/Headernav'
import Footer1 from '@/components/Footer1'
=======
import Login from '@/components/Login'
import Register from '@/components/register/Register'
>>>>>>> efdeacfc69b5684d7d2b31393f98132b9581b914

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'IndexLunbo',
      component: IndexLunbo
    },
    {
<<<<<<< HEAD
      path: '/header',
      name: 'Headernav',
      component: Headernav
    },
    {
      path: '/ft',
      name: 'Footer1',
      component: Footer1
=======
      path: '/reg',
      name: 'Register',
      component: Register
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
>>>>>>> efdeacfc69b5684d7d2b31393f98132b9581b914
    }
    
  ]
})
