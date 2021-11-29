import { useEffect, useCallback } from 'react'
import { useWeb3ReactCore } from '@/hooks'
import { configs, chian } from '@/libs/configs'
import { getCookie } from '@/libs/cookies'
import { authService } from '@/services/auth.service'
import { notice } from '@/utils'

export function useInactiveListener() {
  // __STATE <Rect.Hooks>
  const { account, active } = useWeb3ReactCore()

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    const provider = window.ethereum
    if (provider) {
      const chainId = provider.chainId || provider.networkVersion
      if (chainId) {
        handleChainChange(chainId)
      }
    }
  }, [account])

  useEffect(() => {
    const provider = window.ethereum
    if (provider) {
      provider.on('chainChanged', handleChainChange)
      provider.on('accountsChanged', handleAccountsChange)

      return () => {
        provider.removeListener('chainChanged', handleChainChange)
        provider.removeListener('accountsChanged', handleAccountsChange)
      }
    }
  }, [active])

  // __FUNCTIONS
  const handleChainChange = useCallback((chainkId: string) => {
    if (chian.chianId !== +chainkId) {
      const message = {
        mainnet: 'Binance Smart Chain Network (BSC Mainnet)',
        testnet: 'Binance Smart Chain Testnet (BSC Testnet)'
      }[chian.network]

      notice.warn({
        title: 'Network not support!',
        content: `VONDER.Games is only supported on ${message}.<br />Please confirm you installed Metamask and selected ${message}.`
      })
    }
  }, [])

  const handleAccountsChange = useCallback((accounts: string[]) => {
    if (accounts.length) {
      const currentAccount = getCookie(configs.USER_ADDRESS)
      if (currentAccount) {
        if (currentAccount !== accounts[0]) {
          authService.signin()
        } else {
          authService.getProfile()
        }
      }
    } else {
      authService.signout()
    }
  }, [])

  return void 0
}
