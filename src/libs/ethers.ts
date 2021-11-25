import { Web3Provider, JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers'
import { Contract, ContractInterface } from '@ethersproject/contracts'
import { AddressZero } from '@ethersproject/constants'
import { isAddress } from '@ethersproject/address'
import { chian } from '@/libs/configs'

export function GivenProvider() {
  const { ethereum } = window
  let provider: Web3Provider | JsonRpcProvider

  if (ethereum) {
    provider = new Web3Provider(ethereum)
  } else {
    const rpc = getRpcUrl()
    provider = new JsonRpcProvider(rpc)
  }

  return provider
}

export function createContractFactory(
  contractAddress: string,
  contractAbi: ContractInterface,
  library: Web3Provider,
  account?: string
): Contract {
  if (!isAddress(contractAddress) || contractAddress === AddressZero) {
    throw new Error(`Invalid 'ContractAddress' parameter '${contractAddress}'.`)
  }

  const signerOrProvider = getProviderOrSigner(library, account)

  return new Contract(contractAddress, contractAbi, signerOrProvider)
}

export function getRpcUrl(): string {
  const { rpcs } = chian
  const index = Math.floor(Math.random() * rpcs.length)
  return rpcs[index]
}

export function getSigner(library: Web3Provider, account: string) {
  return library.getSigner(account).connectUnchecked()
}

export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}
