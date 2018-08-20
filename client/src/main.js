import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
// import '@/theme/index.less'
import 'iview/dist/styles/iview.css';
import { routers } from './router';

Vue.use(iView);
// 定义全局变量

Vue.config.productionTip = false;

new Vue({
  router: routers,
  render: h => h(App),
}).$mount('#app');
