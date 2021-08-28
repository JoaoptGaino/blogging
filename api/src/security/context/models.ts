export interface IAuthenticatedUser {
  id: number;
  email: string;
  name: string;
}
export interface IUserSession {
  email: string;
  userId: number;
}

export interface IPayloadJWT {
  sub: string;
  email: string;
}
