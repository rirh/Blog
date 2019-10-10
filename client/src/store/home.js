import {
  observable,
  // computed,
  // autorun,
  action
} from "mobx";

import Home from "@/desktop/page/home";
import Master from "@/desktop/page/master";
import Mine from "@/desktop/page/mine";
import Vue from "@/desktop/page/vue";
import Typescript from "@/desktop/page/typescript";
// import Nginx from "@/desktop/page/nginx";

class AppState {
  @observable is_preview = true;
  @observable menus = [{
    name: 'Koa2',
    path: "/main",
    component: Home
  },
  {
    name: '代表作',
    path: "/main/master",
    component: Master
  },
  {
    name: 'Koa2',
    path: "/main/koa",
    component: Vue
  },
  {
    name: 'typescript',
    path: "/main/typescript",
    component: Typescript

  },
  {
    name: '我',
    path: "/main/mine",
    component: Mine
  },
    // {
    //   name: 'Nginx',
    //   path: "/main/nginx",
    //   component: Nginx

    // },
    // {
    //   name: '小程序',
    //   path: "",
    //   component: null

    // },
    // ,{
    //   name: 'uni-app',
    //   path: ""
    // }
    // ,{
    //   name: 'project',
    //   path: ""
    // },
    // {
    //   name: 'github',
    //   path: "",
    //   component: Vue

    // }
  ];
  // @observable count = 0;
  // @observable name = "charles";
  // @computed get msg() {
  //   return `${this.name} say count is ${this.count}`
  // }
  // @action add() {
  //   this.count += 1;
  // }
  @action change_preview(val) {
    this.is_preview = val;
  }
}
const appState = new AppState()
// setInterval(() => {
//   appState.add()
// }, 1000)

// autorun(() => {
//   console.log('object', appState.msg)
// })
export default appState










// import {
//   observable,
//   computed,
//   autorun,
//   action
// } from "mobx";

// class AppState {
//   @observable is_preview = true;
//   @observable count = 0;
//   @observable name = "charles";
//   @computed get msg() {
//     return `${this.name} say count is ${this.count}`
//   }
//   @action add() {
//     this.count += 1;
//   }
//   @action change_preview() {
//     this.is_preview = !this.is_preview;
//   }
// }
// const appState = new AppState()
// setInterval(() => {
//   appState.add()
// }, 1000)

// autorun(() => {
//   console.log('object', appState.msg)
// })
// export default appState: