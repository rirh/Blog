import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
// import '@/theme/index.less'
import 'iview/dist/styles/iview.css'

// require styles
import {routers} from './router'
import {fetch} from './http'
Vue.use(iView)
// 定义全局变量
Vue.prototype.$fetch = fetch

Vue.config.productionTip = false

new Vue({
  router: routers,
  render: h => h(App)
}).$mount('#app')
