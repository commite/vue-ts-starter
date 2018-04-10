import { GetUserResponse } from '../../models/api/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '../http-client/http-client.service';
import { tap } from 'rxjs/operators';
import { User } from '../../models/user.model';

export class UserService {

  public getUser(userId: number): Observable<GetUserResponse> {
    return HttpClient.get(`/users/${userId}`);
  }

}
