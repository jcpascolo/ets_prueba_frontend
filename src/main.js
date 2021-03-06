import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import VueRouter from 'vue-router'
import router from './router.js'
import store from './store'


Vue.use(VueRouter)

Vue.config.productionTip = false

window.EventHandler = new Vue();


new Vue({
  render: h => h(App),
  router,
  store 
}).$mount('#app')
