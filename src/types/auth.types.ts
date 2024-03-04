export interface IAuthForm {
  email: string
  password: string
  name?: string
}

export interface IUser {
  id: number
  name?: string
  email?: string
}

export interface IAuthResponse {
  accessToken: string
  user: IUser
}
