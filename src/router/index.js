import { createRouter, createWebHashHistory } from "vue-router"
import index from "@/views/index.vue"
import layout from "@/layout"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "layout",
      component: layout,
    },
    {
      path: "/index",
      name: "index",
      component: index,
    },
  ],
})
