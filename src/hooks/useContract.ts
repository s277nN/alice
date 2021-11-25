import { useMemo } from 'react'
import { ContractInterface } from '@ethersproject/contracts'
import { CONTRACTS_ADDRESS, ERC20_INTERFACE, MULTICALL_INTERFACE } from '@/contracts'
import { createContractFactory } from '@/libs/ethers'
import { useActiveWeb3React } from '@/hooks'

export function useContract(
  contractAddress: string,
  contractAbi: ContractInterface,
  withSignerIfPossible: boolean = true
) {
  // __STATE <React.Hooks>
  const { library, account } = useActiveWeb3React()

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
  return useContract(tokenAddress, ERC20_INTERFACE, withSignerIfPossible)
}

export function useMulticallContract(withSignerIfPossible?: boolean) {
  // __STATE <React.Hooks>
  const { chainId } = useActiveWeb3React()
  const address = chainId ? (CONTRACTS_ADDRESS.multicall as any)[chainId] : CONTRACTS_ADDRESS.multicall[97]

  // __RETURN
  return useContract(address, MULTICALL_INTERFACE, withSignerIfPossible)
}
