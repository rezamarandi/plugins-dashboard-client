import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard'

const routes = [
  {
    path: '/:tab?',
    name: 'Dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
