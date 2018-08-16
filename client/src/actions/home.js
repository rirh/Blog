import {
  // GET /homePage 首页标语
  GET_HOME_URL,
  GET_INIT_URL
} from '@/constants/api.js'
import http from '@/http/index.js'
// import store from '@/store'

// GET /clinicM/selectdc/{type} 医生下拉 / 收费员下拉 0医生 1收费员
export function getHome (param) {
  return http.fetch(`${GET_HOME_URL}`)
    .then(({
      response
    }) => response)
    .catch()
}
export function init (param) {
  return http.fetch(`${GET_INIT_URL}`)
    .then(({
      response
    }) => response)
    .catch()
}
