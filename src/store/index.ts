import Vue from 'vue';
import Vuex from 'vuex';
import { countState, countMutations, countActions } from './count.store';
import { userState, userMutations, userActions } from './user.store';
import { User } from '@/models/user.model';

Vue.use(Vuex);

export interface AppState {
  user: User | null;
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
  actions: Object.assign({},
    userActions,
    countActions,
  ),
});
