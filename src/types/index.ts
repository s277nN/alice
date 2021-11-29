import { BigNumber } from '@ethersproject/bignumber'
import { TokenTypes } from '@/constants/tokens'
import { Network } from '@/constants/networks'
import { Connectors } from '@/utils/connectors'

export type { Dialog, DialogOptions, DialogResults } from '@/utils/dialog'
export type { Notice, NoticeOptions } from '@/utils/notice'
export type { MediaBlob } from '@/utils/media'
export type { Modal, ModalOptions } from '@/utils/modal'
export type { User } from './user'

export * from '@/constants/status'
export { UseDialog, UseModal } from '@/constants/utils'
export { Connectors } from '@/utils/connectors'

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
  type: TokenTypes
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
