
import Cookies from 'js-cookie';
import { merge } from 'lodash';
import {
  // 默认分页数据长度
  PAGESIZE,
  // 默认当前页码
  PAGENO,
  // 默认长度
  TOTAL,
  // 默认数组初始值
  LIST,
  // 默认参数初始值为null
  // PARAMETER,
} from '@/utils/config.js';
/*
 * blog
 */
const blog = {
  state: {
    // 设置属性
    // 注册数据
    name: '1',
    blogRequest: {
      pageNo: PAGENO,
      pageSize: PAGESIZE,
    },
    blogList: LIST,
    blogTatol: TOTAL,
  },
  getters: {
    //   获取属性状态
  },

  actions: {

  },
  mutations: {
    setBlogRequestValue(state, value) {
      merge(state.sectionRequest, value);
    },
    setBlogList(state, value) {
      state.blogList = value;
    },
    setBlogValue(state, value) {
      merge(state, value);
    },

  },
};
export default blog;
