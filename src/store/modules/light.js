export default {
  namespaced: true,
  state: {
    data: [
      {
        place: "kitchen",
        on: false
      },
      {
        place: "living-room",
        on: false
      },
      {
        place: "room",
        on: false
      },
      {
        place: "stairs",
        on: false
      },
      {
        place: "wc",
        on: false
      }
    ]
  },
  mutations: {
    toggle(state, place) {
      for (var i in state.data) {
        if (state.data[i].place === place) {
          if (state.data[i].on) {
            state.data[i].on = false;
          } else {
            state.data[i].on = true;
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
