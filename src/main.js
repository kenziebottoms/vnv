import Vue from 'vue'
import App from './App.vue'

import bulmaCss from 'bulma/css/bulma.min.css'
import scss from './assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
