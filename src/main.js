import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import VueRouter from 'vue-router'
import router from './router.js'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
