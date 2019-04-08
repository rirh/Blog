import {
  observable,
  // computed,
  // autorun,
  action
} from "mobx";

class AppState {
  @observable is_preview = true;
  @observable menus= [{
    name: 'Vue',
    path: "/main/vue"
  }, {
    name: 'React',
    path: "/main/react"
  }, {
    name: 'Nginx',
    path: "/main/nginx"
  }, {
    name: '小程序',
    path: ""
  }
    // ,{
    //   name: 'uni-app',
    //   path: ""
    // }
    // ,{
    //   name: 'project',
    //   path: ""
    // }
    ,
  {
    name: 'github',
    path: ""
  },];
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
// export default appState