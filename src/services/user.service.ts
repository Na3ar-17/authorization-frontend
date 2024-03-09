import { axiosWithAuth } from '@/api/interceptors'
import { IUser, TypeuserForm } from '@/types/auth.types'

export interface IProfileResponse {
  user: IUser
}

class UserService {
  private BASE_URL = '/user/profile'

  async update(data: TypeuserForm) {
    const response = await axiosWithAuth.put(this.BASE_URL, data)
    return response.data
  }
}

export const userService = new UserService()
