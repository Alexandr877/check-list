import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Hello from '@/components/Hello'
import App from '@/App'
import Ewizard from '@/components/newComponents/eWizard'
import Cobalt from '@/components/Cobalt'

Vue.use(Router)

export default new Router({
    routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/success',
      name: 'eWizard',
      component: Ewizard
    },
    {
      path: '/cobalt',
      name: 'Cobalt',
      component: Cobalt
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
