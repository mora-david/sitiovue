import Vue from 'vue'
import App from './App.vue'
import router from './router'
import header1 from './components/header1.vue'

Vue.config.productionTip = false

new Vue({
  router,
  header1,
  render: h => h(App),

}).$mount('#app')
