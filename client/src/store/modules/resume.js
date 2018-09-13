
// import {
//   // 默认分页数据长度
//   PAGESIZE,
//   // 默认当前页码
//   PAGENO,
//   // 默认长度
//   TOTAL,
//   // 默认数组初始值
//   LIST,
//   // 默认参数初始值为null
//   PARAMETER
// } from '@/utils/config'

const setting = {
  state: {
    resume: { echarts: {} },
  },
  getters: {
    //   获取属性状态
  },
  actions: {
    //   应用mutations

  },
  mutations: {
    setResume(state, msg) {
      state.resume = msg;
    },
    // setSectionValue (state, value) {
    //   merge(state.sectionRequest, value)
    // }

  },
};
export default setting;
