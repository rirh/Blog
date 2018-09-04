import axios from 'axios';
import { LoadingBar } from 'iview';
import Cookies from 'js-cookie';
import { host } from '../utils/config';


axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.baseURL = host;
// http request 拦截器
axios.interceptors.request.use(
  (response) => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    response.data = JSON.stringify(response.data);
    response.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    // response.headers.Authorization = ''
    return response;
  }, (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:

          break;
        case 500:
          console.log('请求500');
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    }
    return Promise.reject(new Error({
      code: '-100',
      message: '网络异常请稍后再试！',
    }));
  },

);

// http response 拦截器
axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          error.message = '未授权，请重新登录';
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      error.message = '连接到服务器失败';
    }
    return Promise.reject(error.response);
  },
);
export default {
  fetch(url, params, options = {}) {
    LoadingBar.start();
    return new Promise((resolve, reject) => {
      /* eslint no-underscore-dangle: 0 */
      axios({
        method: options.type || 'GET',
        url: `${url}?authId=${Cookies.get('user') ? JSON.parse(Cookies.get('user'))._id : ''}&rundom=${Math.floor(Math.random() * (99999999 - 99999 + 1)) + 99999}`,
        params,
        // data: qs.stringify(options.data),
        data: options.data,
        responseType: options.responseType || 'json',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': options.contentType || 'application/json; charset=UTF-8',
        },
      })
        .then(({
          status,
          data,
          headers,
        }) => {
          LoadingBar.finish();
          if (status === 200) {
            resolve({
              response: data,
            });
          } else {
            reject(data);
          }
        })
        .catch((error) => {
          LoadingBar.error();
          reject(error);
        });
    });
  },
};
