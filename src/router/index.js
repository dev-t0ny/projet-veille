import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '@/pages/index.vue'

const routes = [
  { path: '/', component: IndexPage },
]

export default createRouter({
  history: createWebHashHistory('/projet-veille/'),
  routes
})
