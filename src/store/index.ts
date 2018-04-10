import Vue from 'vue';
import Vuex from 'vuex';
import { countState, countMutations } from './count.store';
import { userState, userMutations } from './user.store';

Vue.use(Vuex);

export interface AppStore {
  user: string;
  count: number;
}

export default new Vuex.Store({
  state : Object.assign({},
    userState,
    countState,
  ),
  mutations: Object.assign({},
    userMutations,
    countMutations,
  ),
});
