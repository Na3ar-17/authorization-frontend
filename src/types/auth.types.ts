export interface IAuthForm {
  email: string
  password: string
  name?: string
}

export interface IUser {
  id?: string
  name?: string
  email?: string
}

export interface IAuthResponse {
  accessToken: string
  user: IUser
}

export type TypeuserForm = Omit<IUser, 'id'> & { password?: string }
