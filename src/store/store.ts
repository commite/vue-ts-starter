import Vue from 'vue';
import Vuex from 'vuex';
import { CountStore } from './count.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    count: CountStore,
  },
});
