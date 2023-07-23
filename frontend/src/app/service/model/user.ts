import {Paginated} from "./misc";

export interface User {
  id: number
  username: string
  email: string | undefined | null
  created_at: string
  updated_at: string | null | undefined
  permission: UserPermission
}

export type Users = Paginated<User>

export interface UserCreate {
  username: string
  password: string
  email: string
  permission: UserPermission
}
export interface UserUpdate {
  username: string | undefined
  old_password: string | undefined
  password: string | undefined
  email: string | undefined
  permission: UserPermission
}

export type UserPermission = "USER" | "ADMIN" | "SUPER_ADMIN" | undefined
