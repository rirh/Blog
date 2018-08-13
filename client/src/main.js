import Vue from 'vue'
import App from './App.vue'
import {
  routers
} from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import {
  post,
  fetch,
  patch,
  put
} from './http'
Vue.use(iView)
// 定义全局变量
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put

Vue.config.productionTip = false

new Vue({
  router: routers,
  render: h => h(App)
}).$mount('#app')
