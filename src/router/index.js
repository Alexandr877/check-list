import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Hello from '@/components/Hello'
import Greeting from '@/components/Greeting'

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
      name: 'Greeting',
      component: Greeting
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
