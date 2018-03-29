import Vuex from 'vuex';

interface CountState {
  count: number;
}

export const CountStore = {
  state: {
    count: 0,
  },
  mutations: {
    increment(state: CountState) {
      state.count++;
    },
  },
  actions: {

  },
};
