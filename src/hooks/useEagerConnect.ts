import { useEffect } from 'react'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { useAuth } from '@/hooks'
import { configs } from '@/libs/configs'
import { getCookie } from '@/libs/cookies'
import { authService } from '@/services/auth.service'
import { Connectors } from '@/types'

export function useEagerConnect() {
  // __STATE <Rect.Hooks>
  const { account } = useWeb3ReactCore()
  const { signin } = useAuth()

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    if (account) {
      const passport: string | null = getCookie(configs.APP_AUTH)
      if (passport) {
        authService.getProfile()
      } else {
        authService.signin()
      }
    } else {
      const connector: Connectors = getCookie(configs.APP_CONNECTOR)
      if (connector) signin(connector)
    }
  }, [account, signin])

  return void 0
}
