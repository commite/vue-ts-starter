export interface LoginBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: { token: string };
}
