import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//全局注册自定义弹框
import toastRegistry from '@/components/toast/index.vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('toastRegistry',toastRegistry)
app.mount('#app')
