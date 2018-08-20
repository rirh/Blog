import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  route,
} from './router';

Vue.use(VueRouter);

export const routers = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: route,
});
