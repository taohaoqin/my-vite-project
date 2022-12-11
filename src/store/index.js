import { createStore } from "vuex"

export default createStore({
  state: {
    menu: [
      {
        text: "一级菜单",
        icon: "Menu",
        children: [
          {
            text: "二级节点",
            url: "1-1",
          },
          {
            text: "二级菜单",
            url: "1-4",
            children: [
              {
                text: "三级节点",
                url: "1-4-1",
              },
            ],
          },
        ],
      },
      {
        text: "一级节点",
        url: "page2",
        icon: "Grid",
      },
    ],
  },
  getters: {
    menu: (state) => state.menu,
  },
  mutations: {
    SET_MENU(state, menu) {
      state.menu = menu
    },
  },
  actions: {
    SET_MENU(context, menu) {
      context.commit("SET_MENU", menu)
    },
  },
})
