import Vue from 'vue'
import App from './App.vue'

import router from './router/routes'

import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel)

import './assets/scss/main.scss'

import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
