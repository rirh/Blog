import {
  // GET /homePage 首页标语
  POST_BLOG_URL,
} from '@/constants/api.js';
import http from '@/http/index.js';

// import store from '@/store'

export function getBlog(params) {
  return http.fetch(`${POST_BLOG_URL}`, params)
    .then(({
      response,
    }) => response)
    .catch();
}

export function postBlog(params) {
  return http.fetch(`${POST_BLOG_URL}`, {}, {
    type: 'POST',
    data: params,
  })
    .then(({
      response,
    }) => response)
    .catch();
}
