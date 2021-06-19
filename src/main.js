import { createApp } from 'vue'
import template from './template'
import router from './router'
import './styles'

createApp(template).use(router).mount('#app')
