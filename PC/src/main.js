// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import App from './App';
import Axios from 'axios';
import router from './router';
import Vuex from 'vuex';

Vue.prototype.ajax=Axios
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    show: true
  },
  mutations: {
    increment (state) {
      state.show = false;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})

