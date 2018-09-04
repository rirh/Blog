import home from '@/views/home/pages';
import navigation from '@/views/navigation';

import index from '@/views/index/pages';
import blog from '@/views/blog/pages/main';
import utils from '@/views/utils/pages';
import about from '@/views/about/pages';
import login from '@/views/user/pages/login';
import register from '@/views/user/pages/register';
import listblog from '@/views/blog/pages/main/list';
import writeblog from '@/views/blog/pages/main/write';

// 错误页面
import err401 from '@/views/error/401';
import err500 from '@/views/error/500';
import err404 from '@/views/error/404';


// import detailAbout from '@/views/about/pages/index-detail';

export default [
  {
    path: '/',
    name: 'index',
    component: home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'home',
        component: index,
      },
      {
        path: '/blog',
        name: 'blog',
        component: blog,
        redirect: '/listblog',
        children: [
          {
            path: '/listblog',
            name: 'listblog',
            component: listblog,
          },
          {
            path: '/writeblog',
            name: 'writeblog',
            component: writeblog,
          },
        ],
      }, {
        path: '/utils',
        name: 'utils',
        component: utils,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: navigation,
  }, {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/401',
    name: 'error_401',
    component: err401,
  }, {
    path: '/500',
    name: 'error_500',
    component: err500,
  }, {
    path: '*',
    name: 'error_404',
    component: err404,
  },


];
