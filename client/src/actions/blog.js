import {
  // GET /homePage 首页标语
  POST_BLOG_URL,
} from '@/constants/api.js';
import http from '@/http/index.js';
import store from '@/store';


// import store from '@/store'

export function getBlog() {
  console.log(store);
  return http.fetch(`${POST_BLOG_URL}`, store.state.blog.blogRequest)
    .then(({ response: { data: { list, total } } }) => {
      store.commit('setBlogList', list);
      store.commit('setBlogValue', {
        blogTatol: total,
      });
    })
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
