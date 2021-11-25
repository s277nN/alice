import { configs } from '@/libs/configs'
import { getCookie } from '@/libs/cookies'
import { User } from '@/types'

interface AuthState {
  address: string | null
  user: User | null
}

export const initialState: AuthState = {
  address: getCookie(configs.USER_ADDRESS) || null,
  user: getCookie(configs.USER_INFO, true) || null
}
