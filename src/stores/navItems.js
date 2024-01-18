import { defineStore } from 'pinia';

export const useNavItemsStore = defineStore("navItems", {
  state: () => ({
    menu: [
      {id: 1, name: 'home', title: "Home"},
      {id: 2, name: 'what-to-do', title: "What To Do"},
      {id: 3, name: 'the-digital-divide', title: "The Digital Divide"},
      {id: 4, name: 'get-involved', title: "Get Involved"},
      {id: 5, name: 'our-network', title: "Our Network"},
      {id: 6, name: 'insights', title: "Insights"}
    ]
  }
  ),
  getters: {
    getMenu: (state) => {
      return state.menu;
    }
  },
  actions: {

  }
})