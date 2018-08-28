import Vue from 'vue';
import Vuex from 'vuex';
import resume from './modules/resume';
import blog from './modules/blog';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {

  },
  modules: {
    resume, blog,
  },
});

export default store;
