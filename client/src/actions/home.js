import {
  // GET /homePage 首页标语
  GET_HOME_URL,
  GET_INIT_URL,
} from '@/constants/api.js';
import http from '@/http/index.js';
// import store from '@/store'

export function getHome() {
  return http.fetch(`${GET_HOME_URL}`)
    .then(({
      response,
    }) => response)
    .catch();
}
export function init() {
  return http.fetch(`${GET_INIT_URL}`)
    .then(({
      response,
    }) => response)
    .catch();
}
