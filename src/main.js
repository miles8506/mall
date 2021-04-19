import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import obj from 'components/common/toast/';
import FastClick from 'fastclick';

//300毫秒延遲問題
FastClick.attach(document.body);

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.use(obj);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
