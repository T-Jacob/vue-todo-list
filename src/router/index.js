import Vue from 'vue'
import Router from 'vue-router'
import BaseTodo from '@/components/BaseTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaseTodo',
      component: BaseTodo
    }
  ]
})
