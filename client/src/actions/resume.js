import {
  // GET /homePage 首页标语
  GET_RESUME_URL,
  GET_INIT_URL,
} from '@/constants/api.js';
import http from '@/http/index.js';
import store from '@/store';

export async function getResume() {
  const { response: { data } } = await http.fetch(`${GET_RESUME_URL}`);
  store.commit('setResume', data[0]);
  return data;
}
export function init() {
  return http.fetch(`${GET_INIT_URL}`)
    .then(({
      response,
    }) => response)
    .catch();
}
