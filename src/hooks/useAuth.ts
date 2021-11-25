import { useCallback, useMemo } from 'react'
import { useWeb3React as useWeb3ReactCore, UnsupportedChainIdError } from '@web3-react/core'
import { NoEthereumProviderError, UserRejectedRequestError } from '@web3-react/injected-connector'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import { configs } from '@/libs/configs'
import { setCookie } from '@/libs/cookies'
import { authService } from '@/services/auth.service'
import { connectorsBy, dialog } from '@/utils'
import { Connectors } from '@/types'

export function useAuth() {
  // __STATE <Rect.Hooks>
  const { activate, deactivate } = useWeb3ReactCore()

  // __FUNCTIONS
  const signin = useCallback(
    async (connectorName: Connectors) => {
      const connector = connectorsBy[connectorName]

      if (!connector) {
        dialog({
          title: 'Unable to find connector',
          children: 'The connector config is wrong.'
        })

        return void 0
      }

      await activate(connector, (err: Error) => {
        if (err instanceof UnsupportedChainIdError) {
        } else {
          const _alert = { title: err.name, message: err.message }

          if (err instanceof NoEthereumProviderError || err instanceof NoBscProviderError) {
            _alert.title = 'Provider Error'
            _alert.message = 'No provider was found.'
          } else if (err instanceof UserRejectedRequestError) {
            _alert.title = 'Connection Refused'
            _alert.message = 'Please authorize to access your account.'
          }
        }
      })

      setCookie(configs.APP_CONNECTOR, connectorName)
    },
    [activate]
  )

  const signout = useCallback(() => {
    deactivate()
    authService.signout()
  }, [deactivate])

  return useMemo(() => ({ signin, signout }), [signin, signout])
}
