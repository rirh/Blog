import home from '@/views/home/index'
import arcitle from '@/views/arcitle'
import works from '@/views/works'
import about from '@/views/about'

export default 
    [
        {
          path: '/',
          name: 'home',
          component: home
        } ,{
          path: '/arcitle',
          name: 'arcitle',
          component: arcitle
        } ,{
          path: '/works',
          name: 'works',
          component: works
        } ,{
          path: '/about',
          name: 'about',
          component: about
        }
      ]



