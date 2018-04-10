import Vuex from 'vuex';

interface CountState {
  count: number;
}

export const countState = {
  count: 0,
};

export const countMutations = {
  countIncrement(state: CountState) {
    state.count++;
  },
};
