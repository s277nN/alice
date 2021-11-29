import { useMemo } from 'react'
import { ContractInterface } from '@ethersproject/contracts'
import { CONTRACTS_ADDRESS, ERC20_INTERFACE, MULTICALL_INTERFACE } from '@/contracts'
import { createContractFactory } from '@/libs/ethers'
import { useWeb3ReactCore } from '@/hooks'

export function useContract(
  contractAddress: string,
  contractAbi: ContractInterface,
  withSignerIfPossible: boolean = true
) {
  // __STATE <React.Hooks>
  const { library, account } = useWeb3ReactCore()

  // __RETURN
  return useMemo(() => {
    if (!contractAddress || !contractAbi || !library) return void 0

    try {
      return createContractFactory(
        contractAddress,
        contractAbi,
        library,
        withSignerIfPossible && account ? account : void 0
      )
    } catch (error) {
      console.error('Failed to get contract', error)
      return void 0
    }
  }, [contractAddress, contractAbi, library, account, withSignerIfPossible])
}

export function useTokenContract(tokenAddress: string, withSignerIfPossible?: boolean) {
  // __RETURN
  return useContract(tokenAddress, ERC20_INTERFACE, withSignerIfPossible)?.functions
}
