import {
  // GET /homePage 首页标语
  POST_LOGIN_URL,
  POST_REGISTER_URL,
} from '@/constants/api.js';
import http from '@/http/index.js';

// import store from '@/store'

export function postLogin(params) {
  return http.fetch(`${POST_LOGIN_URL}`, {}, {
    type: 'POST',
    data: params,
  })
    .then(({
      response,
    }) => response)
    .catch();
}
export async function postRegister(params) {
  const { response } = await http.fetch(`${POST_REGISTER_URL}`, {}, {
    type: 'POST',
    data: params,
  });
  return response;
}
