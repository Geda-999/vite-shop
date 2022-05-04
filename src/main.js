import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import 'virtual:windi.css'

//注意use要在mount之前
createApp(App).use(router).use(ElementPlus).mount('#app')

