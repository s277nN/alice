import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { chian } from '@/libs/configs'
import { getRpcUrl } from '@/libs/ethers'

const RPC_URL = getRpcUrl()

export enum Connectors {
  Injected = 'injected',
  BSC = 'bsc',
  WalletConnect = 'walletconnect'
}

export function getLibrary(provider: any) {
  const library = new Web3Provider(provider, chian.chianId)
  library.pollingInterval = 12_000
  return library
}

export const injected = new InjectedConnector({ supportedChainIds: [chian.chianId] })
export const bsc = new BscConnector({ supportedChainIds: [chian.chianId] })
export const walletconnect = new WalletConnectConnector({
  rpc: { [chian.chianId]: RPC_URL },
  qrcode: true
})

export const connectorsBy: { [connector in Connectors]: AbstractConnector } = {
  [Connectors.Injected]: injected,
  [Connectors.BSC]: bsc,
  [Connectors.WalletConnect]: walletconnect
}
