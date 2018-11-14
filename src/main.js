import Vue from 'vue'
import App from './App.vue'

import scss from './assets/scss/style.scss'
import bulmaCss from 'bulma/css/bulma.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
