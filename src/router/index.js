import { createRouter, createWebHashHistory } from "vue-router"
import index from "@/views/index.vue"
import { generateRoutes } from "@/router/generatorRouters.js"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/index",
      name: "index",
      component: index,
    },
    ...generateRoutes(),
  ],
})
