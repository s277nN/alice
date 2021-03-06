export enum Network {
  Mainnet = 'mainnet',
  Testnet = 'testnet'
}

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 42161,
  ARBITRUM_TESTNET = 79377087078960,
  MOONBEAM_TESTNET = 1287,
  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  OKEX = 66,
  OKEX_TESTNET = 65,
  CELO = 42220,
  PALM = 11297108109,
  PALM_TESTNET = 11297108099,
  MOONRIVER = 1285,
  FUSE = 122
}

const Arbitrum = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/arbitrum.jpg'
const Avalanche = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/avalanche.jpg'
const Bsc = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/bsc.jpg'
const Fantom = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/fantom.jpg'
const Goerli = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/goerli.jpg'
const Harmony = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/harmonyone.jpg'
const Heco = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/heco.jpg'
const Kovan = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/kovan.jpg'
const Mainnet = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/mainnet.jpg'
const Matic = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/polygon.jpg'
const Moonbeam = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/moonbeam.jpg'
const OKEx = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/okex.jpg'
const Polygon = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/polygon.jpg'
const Rinkeby = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/rinkeby.jpg'
const Ropsten = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/ropsten.jpg'
const xDai = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/xdai.jpg'
const Celo = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/celo.jpg'
const Palm = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/palm.jpg'
const Moonriver = 'https://raw.githubusercontent.com/vonder-admin/icons/main/network/moonriver.jpg'
const Fuse = 'https://raw.githubusercontent.com/vonder-admin/icons/main/token/fuse.jpg'

export const NETWORK_ICON = {
  [ChainId.MAINNET]: Mainnet,
  [ChainId.ROPSTEN]: Ropsten,
  [ChainId.RINKEBY]: Rinkeby,
  [ChainId.GÖRLI]: Goerli,
  [ChainId.KOVAN]: Kovan,
  [ChainId.FANTOM]: Fantom,
  [ChainId.FANTOM_TESTNET]: Fantom,
  [ChainId.BSC]: Bsc,
  [ChainId.BSC_TESTNET]: Bsc,
  [ChainId.MATIC]: Polygon,
  [ChainId.MATIC_TESTNET]: Matic,
  [ChainId.XDAI]: xDai,
  [ChainId.ARBITRUM]: Arbitrum,
  [ChainId.ARBITRUM_TESTNET]: Arbitrum,
  [ChainId.MOONBEAM_TESTNET]: Moonbeam,
  [ChainId.AVALANCHE]: Avalanche,
  [ChainId.AVALANCHE_TESTNET]: Avalanche,
  [ChainId.HECO]: Heco,
  [ChainId.HECO_TESTNET]: Heco,
  [ChainId.HARMONY]: Harmony,
  [ChainId.HARMONY_TESTNET]: Harmony,
  [ChainId.OKEX]: OKEx,
  [ChainId.OKEX_TESTNET]: OKEx,
  [ChainId.CELO]: Celo,
  [ChainId.PALM]: Palm,
  [ChainId.MOONRIVER]: Moonriver,
  [ChainId.FUSE]: Fuse
}

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Polygon (Matic)',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.ARBITRUM]: 'Arbitrum',
  [ChainId.ARBITRUM_TESTNET]: 'Arbitrum Testnet',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.MOONBEAM_TESTNET]: 'Moonbase',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.AVALANCHE_TESTNET]: 'Fuji',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
  [ChainId.OKEX]: 'OKEx',
  [ChainId.OKEX_TESTNET]: 'OKEx',
  [ChainId.CELO]: 'Celo',
  [ChainId.PALM]: 'Palm',
  [ChainId.MOONRIVER]: 'Moonriver',
  [ChainId.FUSE]: 'Fuse'
}
