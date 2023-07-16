import {User} from "./user";

export interface SessionToken {
  user: User,
  token: string,
  expired_at: string
}

export interface LoginForm {
  username: string
  password: string
}
