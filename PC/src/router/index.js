import Vue from 'vue';
import Router from 'vue-router';
import IndexLunbo from '@/components/IndexLunbo'
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
