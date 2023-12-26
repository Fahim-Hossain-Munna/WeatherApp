import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css' // import this file
import 'bootstrap-vue/dist/bootstrap-vue.css' // import this file
import router from './router/route'

let appication = createApp(App)

appication.use(router)

appication.mount('#app')
