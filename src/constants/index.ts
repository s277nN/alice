import { BigNumber } from '@ethersproject/bignumber'
import { JSBI, Percent } from '@pancakeswap/sdk'
import { Connectors } from '@/utils/connectors'
import { ChainId } from '@/constants/networks'
import { WalletInfo } from '@/types'

export const SUPPORTED_WALLETS: WalletInfo[] = [
  {
    connector: Connectors.Injected,
    name: 'MetaMask',
    icon: 'metamask.svg',
    description: 'Easy-to-use browser extension.'
  },
  {
    connector: Connectors.WalletConnect,
    name: 'WalletConnect',
    icon: 'walletconnect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    mobile: true
  },
  {
    connector: Connectors.BSC,
    name: 'Binance Chain Wallet',
    icon: 'binance-chain-wallet.svg',
    description: 'Login using Binance hosted wallet',
    mobile: true
  }
]

export const NetworkContextName = 'NETWORK'
// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 13
// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 30 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 30

// default archer gas estimate, 250k wei
export const DEFAULT_ARCHER_GAS_ESTIMATE: BigNumber = BigNumber.from(250000)
// default gas prices to use if all other sources unavailable
export const DEFAULT_ARCHER_GAS_PRICES: BigNumber[] = [
  BigNumber.from(60000000000),
  BigNumber.from(70000000000),
  BigNumber.from(100000000000),
  BigNumber.from(140000000000),
  BigNumber.from(300000000000),
  BigNumber.from(800000000000),
  BigNumber.from(2000000000000)
]
// default miner tip, equal to median gas price * default gas estimate
export const DEFAULT_ARCHER_ETH_TIP: JSBI = JSBI.BigInt(
  DEFAULT_ARCHER_GAS_ESTIMATE.mul(DEFAULT_ARCHER_GAS_PRICES[4]).toString()
)

// used for rewards deadlines
export const BIG_INT_SECONDS_IN_WEEK = JSBI.BigInt(60 * 60 * 24 * 7)

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH

export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008'
]

// BentoBox Swappers
export const BASE_SWAPPER: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x0',
  [ChainId.ROPSTEN]: '0xe4E2540D421e56b0B786d40c5F5268891288c6fb'
}

export const EIP_1559_ACTIVATION_BLOCK: { [chainId in ChainId]?: number } = {
  [ChainId.ROPSTEN]: 10499401,
  [ChainId.GÖRLI]: 5062605,
  [ChainId.RINKEBY]: 8897988
}

export const BSC_BLOCK_TIME = 3
export const BLOCKS_PER_YEAR = (60 / BSC_BLOCK_TIME) * 60 * 24 * 365 // 10512000
