import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// modules
import alarmModule from "./modules/alarm";
import lightModule from "./modules/light";
import stoveModule from "./modules/stove";
import thermometerModule from "./modules/thermometer";

export default new Vuex.Store({
  namespaced: true,
  modules: {
    alarm: alarmModule,
    light: lightModule,
    stove: stoveModule,
    thermometer: thermometerModule
  }
});
