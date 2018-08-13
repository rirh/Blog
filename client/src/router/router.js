import home from '@/views/home/pages'
import navigation from '@/views/navigation/pages'

import index from '@/views/index/pages'
import about from '@/views/about/pages'
import detailAbout from '@/views/about/pages/index-detail'

export var route = [
  {
    path: '/',
    name: 'index',
    component: home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'home',
        component: index
      }
    ]
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: navigation
  }, {
    path: '/about',
    name: 'about',
    component: about
  }, {
    path: '/about',
    name: 'detail-about',
    component: detailAbout
  }

]
