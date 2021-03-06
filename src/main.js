import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import * as Chart from 'chart.js'
import Chartkick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'
import { dollarFilter, percentFilter, getDate } from '@/filters'

// IMPLEMENTANDO COMPONENTES DE TERCEROS
Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.filter('date', getDate)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
