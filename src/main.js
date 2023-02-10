import Vue from 'vue'
import App from './App.vue'

import router from './router/routes'

import VueCarousel from 'vue-carousel';
import Vuelidate from 'vuelidate'

Vue.use(VueCarousel).use(Vuelidate)

import './assets/scss/main.scss'

import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
