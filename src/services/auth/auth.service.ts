import { LoginBody, LoginResponse } from '../../models/api/auth.model';
import { HttpClient } from '../http-client/http-client.service';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import store from '@/store/index';
import router from '@/router';

export class AuthService {

  public login(body: LoginBody): Observable<LoginResponse> {
    return HttpClient.post<LoginResponse>('/login', body).pipe(
      tap((res) => {
        localStorage.setItem('token', res.data.token);
      }),
    );
  }

  public logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    store.commit('cleanUser');
    router.push('/login');
  }
}
