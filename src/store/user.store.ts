import Vuex from 'vuex';
import { ActionContext } from 'vuex';
import { AppState } from './index';
import { User } from '@/models/user.model';
import { HttpClient } from '@/services/http-client/http-client.service';
import { GetUserResponse } from '@/models/api/user.model';
import { tap } from 'rxjs/operators';
import { LoginBody, LoginResponse } from '@/models/api/auth.model';

const INITIAL_STATE = null;
type Context = ActionContext<UserState, AppState>;

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
