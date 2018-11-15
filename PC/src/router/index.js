import Vue from 'vue';
import Router from 'vue-router';
import Bkrmlxj from '@/components/Bkrmlxj';
import HelloWorld from '@/components/HelloWorld'
import IndexLunbo from '@/components/IndexLunbo';
import Myindex from '@/components/Myindex';
import Axios from 'axios';

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'IndexLunbo',
      component: IndexLunbo
    }
    
  ]
})
