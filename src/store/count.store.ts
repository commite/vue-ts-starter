import Vuex, { ActionContext } from 'vuex';
import { AppState } from '@/store';

type Context = ActionContext<CountState, AppState>;

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

export const countActionsIndex = {
  increment: 'countIncrement',
};

export const countActions = {
  countIncrement(context: Context) {
    context.commit('countIncrement');
  },
};
