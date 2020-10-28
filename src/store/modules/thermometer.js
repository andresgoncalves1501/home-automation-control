export default {
  namespaced: true,
  state: {
    data: [
      {
        place: "kitchen",
        on: false,
        temp: 19
      },
      {
        place: "living-room",
        on: false,
        temp: 19
      },
      {
        place: "room",
        on: false,
        temp: 19
      }
    ]
  },
  mutations: {
    increase(state, place) {
      for (var i in state.data) {
        if (state.data[i].place === place && state.data[i].on) {
          state.data[i].temp++;
        }
      }
    },
    reduce(state, place) {
      for (var i in state.data) {
        if (state.data[i].place === place && state.data[i].on) {
          state.data[i].temp--;
        }
      }
    },
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
    increase: function({ commit }, payload) {
      commit("increase", payload);
    },
    reduce: function({ commit }, payload) {
      commit("reduce", payload);
    },
    toggle: function({ commit }, payload) {
      commit("toggle", payload);
    }
  }
};
