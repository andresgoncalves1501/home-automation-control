export default {
  namespaced: true,
  state: {
    data: [
      {
        stovepipe: 1,
        temp: 0
      },
      {
        stovepipe: 2,
        temp: 0
      },
      {
        stovepipe: 3,
        temp: 0
      },
      {
        stovepipe: 4,
        temp: 0
      }
    ]
  },
  mutations: {
    toggle(state, stovepipe) {
      for (var i in state.data) {
        if (state.data[i].stovepipe === stovepipe) {
          if (state.data[i].temp === 4) {
            state.data[i].temp = 0;
          } else {
            state.data[i].temp++;
          }
        }
      }
    }
  },
  actions: {
    toggle: function({ commit }, payload) {
      commit("toggle", payload);
    }
  }
};
