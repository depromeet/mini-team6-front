// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
// import VueAxios from 'Vue-Axios'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.prototype.$axios = axios
// Vue.use(VusAxios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
