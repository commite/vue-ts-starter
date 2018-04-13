import Vuex from 'vuex';
import { ActionContext } from 'vuex';
import { AppState } from './index';
import { User } from '@/models/user.model';
import { HttpClient } from '@/services/http-client/http-client.service';
import { GetUserResponse } from '@/models/api/user.model';
import { tap } from 'rxjs/operators';
import { LoginBody } from '@/models/api/auth.model';

const INITIAL_STATE = null;
type Context = ActionContext<{user: User}, AppState>;

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

export const userActionsIndex = {
  getUser: 'getUser',
  login: 'login',
};

export const userActions = {
  getUser(context: Context, userId: string) {
    return HttpClient.get<GetUserResponse>(`/users/${userId}`).subscribe(
      (res: GetUserResponse) => {
        context.commit('setUser', res.data);
      },
    );
  },
  login(context: Context, body: LoginBody) {
    return HttpClient.post('/login', body).subscribe();
  },
};
