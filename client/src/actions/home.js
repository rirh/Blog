import {
  // GET /homePage 首页标语
  GET_HOME_URL,
  GET_INIT_URL,
} from '@/constants/api.js';
import http from '@/http/index.js';
// import store from '@/store'

export async function getHome() {
  const { response } = await http.fetch(`${GET_HOME_URL}`);
  return response;
}
export async function init() {
  const { response } = await http.fetch(`${GET_INIT_URL}`);
  return response;
}
