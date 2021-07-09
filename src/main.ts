/* eslint-disable eol-last */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/main.scss'

Vue.filter('formatMoney', function (valor: number) {
  return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')