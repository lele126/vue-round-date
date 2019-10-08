import Vue from 'vue'
import App from './App.vue'
import VueRoundDate from './lib/index.js'

Vue.config.productionTip = false
Vue.use(VueRoundDate)
new Vue({
  render: h => h(App),
}).$mount('#app')
