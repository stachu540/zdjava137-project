export interface User {
  id: number
  username: string
  email: string | undefined | null
  created_at: string
  updated_at: string | null
  permission: "USER" | "ADMIN" | "SUPER_ADMIN" | undefined
}

export type Users = User[]

export interface UserCreate {
  username: string
  password: string
  email: string
  permission: "USER" | "ADMIN" | "SUPER_ADMIN" | undefined
}
export interface UserUpdate {
  username: string | undefined
  old_password: string | undefined
  password: string | undefined
  email: string | undefined
  permission: "USER" | "ADMIN" | "SUPER_ADMIN" | undefined
}
