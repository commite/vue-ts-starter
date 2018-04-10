import Vuex from 'vuex';
import { User } from '@/models/user.model';

const INITIAL_STATE = null;

interface UserState {
  user: User | null;
}

export const userState: UserState = {
  user: INITIAL_STATE,
};

export const userMutations = {
  setUser(state: UserState, user: User) {
    state.user = user;
  },
  cleanUser(state: UserState) {
    state.user = INITIAL_STATE;
  },
};
