import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import obj from 'components/common/toast/';
import FastClick from 'fastclick';
import VueLazyload from 'vue-lazyload';

//lazyload
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png'),
})

// toast
Vue.use(obj);

//300毫秒延遲問題
FastClick.attach(document.body);

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')