import { createStore } from "vuex"

export default createStore({
  state: {
    menu: [
      {
        text: "一级菜单",
        icon: "Menu",
        url: "/two",
        children: [
          {
            text: "二级节点",
            url: "/two",
            name: 'two',
            leaf: true,
          },
          {
            text: "二级菜单",
            url: "/three",
            children: [
              {
                text: "三级节点",
                url: "/three",
                name: 'three',
                leaf: true,
              },
            ],
          },
        ],
      },
      {
        text: "一级节点",
        url: "/one",
        icon: "Grid",
        name: 'one',
        leaf: true,
      },
      {
        text: "四级节点",
        url: "/four",
        icon: "Grid",
        name: 'four',
        leaf: true,
      },
      {
        text: "六级节点",
        url: "/six",
        icon: "Grid",
        name: 'six',
        leaf: true,
      },
    ],
  },
  getters: {
    menu: (state) => state.menu,
  },
  mutations: {
    SET_MENU (state, menu) {
      state.menu = menu
    },
  },
  actions: {
    SET_MENU (context, menu) {
      context.commit("SET_MENU", menu)
    },
  },
})
