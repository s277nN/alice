import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
export function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> & {
  chainId?: number | string
} {
  // __STATE <React.Hooks>
  const context = useWeb3ReactCore<Web3Provider>()
  const impersonate = false

  // __RETURN
  return { ...context, account: impersonate || context.account }
}
