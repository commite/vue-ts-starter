export class LoginBody {
  public email: string;
  public password: string;

  constructor(loginBody: LoginBody) {
    this.email = loginBody.email;
    this.password = loginBody.password;
  }
}

export interface LoginResponse {
  token: string;
}
