import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '@/pages/index.vue'
import ExperimentationPage from '@/pages/experimentation.vue'
import MaterielPage from '@/pages/materiel.vue'
import Tp2Page from '@/pages/tp2.vue'

const routes = [
  { path: '/', component: IndexPage },
  { path: '/tp2', component: Tp2Page },
  { path: '/materiel', component: MaterielPage },
  { path: '/experimentation', component: ExperimentationPage },
]

export default createRouter({
  history: createWebHashHistory('/projet-veille/'),
  routes
})
