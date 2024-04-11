import { createApp } from "vue"
import "./style.css"
import "jsmind/style/jsmind.css"
import router from "./router"
// import { addRoutes } from "@/router/generatorRouters.js"
import store from "./store"
import App from "./App.vue"
import { Menu, Grid } from "@element-plus/icons-vue"
// import { path } from '@/utils'

// console.log(path('./vue.svg'))

const app = createApp(App)

app.use(router)
app.use(store)
// app.use(ElementPlus)

// 设置全局变量
// app.config.globalProperties.$f = () => {
//   console.log("main.js 全局方法")
// }
// app.config.globalProperties.$variable = 'main.js 全局变量'
// 获取全局变量
// const { proxy } = getCurrentInstance()
//     proxy.$f()
//     console.log(proxy.$variable)

app.mount("#app")
app.component(Menu.name, Menu)
app.component(Grid.name, Grid)
