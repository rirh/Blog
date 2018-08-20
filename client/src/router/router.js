import home from '@/views/home/pages';
import navigation from '@/views/navigation/pages';

import index from '@/views/index/pages';
import blog from '@/views/blog/pages/main';
import utils from '@/views/utils/pages';
import about from '@/views/about/pages';

// import detailAbout from '@/views/about/pages/index-detail';

export const route = [
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
      }, {
        path: '/utils',
        name: 'utils',
        component: utils,
      },
    ],
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


];
