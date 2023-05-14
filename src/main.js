import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from "echarts"
import 'echarts-liquidfill'
const app = createApp(App)
app.config.globalProperties.$echarts=echarts
app.mount('#app')
