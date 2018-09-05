import Vue from 'vue';
import iView from 'iview';
import iEditor from 'iview-editor';
import ElementUI from 'element-ui';
import App from './App.vue';
import store from './store';


import 'element-ui/lib/theme-chalk/index.css';

// import '@/theme/index.less'
import 'iview/dist/styles/iview.css';
import 'iview-editor/dist/iview-editor.css';
// import './index.less';

import { routers } from './router';

Vue.use(iView);
Vue.use(iEditor);
Vue.use(ElementUI);

// 定义全局变量

Vue.config.productionTip = false;

new Vue({
  router: routers,
  store,
  render: h => h(App),
}).$mount('#app');
