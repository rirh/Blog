import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/store';
import iView from 'iview';
import route from './router';
// import {
//   getToken,
//   canTurnTo,
// }
//   from '@/utils/helper';

console.log();


Vue.use(VueRouter);

export const routers = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: route,
});

// const LOGIN_PAGE_NAME = 'login';

routers.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
  // const token = getToken();
  // if (!token && to.name !== LOGIN_PAGE_NAME) {
  //   // 未登录且要跳转的页面不是登录页
  //   next({
  //     name: LOGIN_PAGE_NAME, // 跳转到登录页
  //   });
  // } else if (!token && to.name === LOGIN_PAGE_NAME) {
  //   // 未登陆且要跳转的页面是登录页
  //   next(); // 跳转
  // } else if (token && to.name === LOGIN_PAGE_NAME) {
  //   // 已登录且要跳转的页面是登录页
  //   next({
  //     name: 'home', // 跳转到home页
  //   });
  // } else {
  //   store.dispatch('getUserInfo').then((user) => {
  //     // 拉取用户信息，
  // 通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
  //     if (canTurnTo(to.name, user.access, route)) next(); // 有权限，可访问
  //     else {
  //       next({
  //         replace: true,
  //         name: 'error_401',
  //       });
  //     } // 无权限，重定向到401页面
  //   });
  // }
});

routers.afterEach((to) => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});
