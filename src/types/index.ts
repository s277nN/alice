import { BigNumber } from '@ethersproject/bignumber'
import { Connectors, CurrencyStatus, Network } from './constants'

export * from './constants'
export type { Dialog, DialogOptions, DialogResults } from '@/utils/dialog'
export type { Notice, NoticeOptions } from '@/utils/notice'
export type { MediaBlob } from '@/utils/media'
export type { Modal, ModalOptions } from '@/utils/modal'
export type { User } from './user'

export { UseModal } from '@/utils/modal'

export type Theme = 'default' | 'light' | 'dark'

export interface ChianConfigs {
  chianId: number
  network: Network
  explorer: string
  rpcs: string[]
}

export interface WalletInfo {
  connector: Connectors
  name: string
  icon: string
  description: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export interface Currency {
  type: CurrencyStatus
  name: string
  symbol: string
  address: string
  chainId: number
  decimals: number
  logoURI: string
}

export interface CurrencyInputCallback {
  value: BigNumber
  currency: Currency
}

export interface StorageProps {
  get: (key: string) => string | null | void
  set: (key: string, input: any) => void
  remove: (key: string) => void
}
