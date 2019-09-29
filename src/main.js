import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import jquery from '../public/jquery-1.12.4.min'
import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
