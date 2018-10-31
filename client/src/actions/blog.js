import {
  // GET /homePage 首页标语
  GET_BLOG_URL
} from '@/constants/api.js'
import http from '@/http/index.js'
import store from '@/store'

// import store from '@/store'
export async function getBlog (params) {
  const {response} = await http.fetch(`${GET_BLOG_URL}`)
  return response
}

export function postBlog (params) {
  return http.fetch(`${GET_BLOG_URL}`, {}, {
    type: 'POST',
    data: params
  })
    .then(({
      response
    }) => response)
    .catch()
}
