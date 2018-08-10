import home from '@/views/home/pages'
import navigation from '@/views/navigation/pages'
export var route = [
  {
    path: '/',
    name: 'index',
    component: home
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: navigation
  }
]
