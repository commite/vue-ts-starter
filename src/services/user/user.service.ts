import { GetUserResponse } from '../../models/api/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '../http-client/http-client.service';
import { tap } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { Store } from 'vuex';
import { AppStore } from '@/store';

export class UserService {

  private $store: Store<AppStore>;

  constructor($store: Store<AppStore>) {
    this.$store = $store;
  }

  public getUser(userId: number): Observable<GetUserResponse> {
    return HttpClient.get<GetUserResponse>(`/users/${userId}`).pipe(
      tap((res: GetUserResponse) => {
        this.$store.commit('setUser', res.data);
      }),
    );
  }

}
