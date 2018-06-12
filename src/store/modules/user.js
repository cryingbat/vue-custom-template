const user = {
  state: {
    sidebar: '',
    
  },
  mutations: {
    TOGGLE_SIDEBAR: (state,data) => {
      state.sidebar = data;
    },
  },
  actions: {
    ToggleSideBar: ({commit},data) => {
      commit('TOGGLE_SIDEBAR',data)
    },
  }
};

export default user;
