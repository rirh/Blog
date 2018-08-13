import home from '@/views/home/pages'
import navigation from '@/views/navigation/pages'
import about from '@/views/about/pages'
export var route = [
  {
    path: '/',
    name: 'index',
    component: home,
    children: [
      {
        path: '/about',
        name: 'about',
        component: about
      }

    ]
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: navigation
  }

]
