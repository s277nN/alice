import { ChianConfigs, Network } from '@/types'

export const configs = {
  APP_MODE: process.env.NODE_ENV,
  APP_NAME: process.env.REACT_APP_APP_NAME || 'project_alice',
  APP_WEB_TITLE: process.env.REACT_APP_APP_WEB_TITLE || 'PROJECT - ALICE.',
  APP_BASE_URL: process.env.REACT_APP_APP_BASE_URL || 'http://localhost:8080',

  // XMLHttpRequest (XHR)
  API_GATEWAY: process.env.REACT_APP_API_GATEWAY || 'http://localhost:3000/api',
  API_SECRET_KEY: process.env.REACT_APP_API_SECRET_KEY || 'unset',

  // CHAIN Network
  APP_CHAIN_ID: parseInt(process.env.REACT_APP_CHAIN_ID || '97', 10),

  // FIREBASE Configs
  APP_FIREBASE: {
    apiKey: process.env.REACT_APP_FIRE_API_KEY,
    authDomain: process.env.REACT_APP_FIRE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIRE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIRE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRE_MESSAGING_ID,
    appId: process.env.REACT_APP_FIRE_APP_ID,
    measurementId: process.env.REACT_APP_FIRE_MEASUREMENT_ID
  },

  // STORAGE KEY-NAME
  APP_AUTH: 'APP.PassportToken',
  APP_CONNECTOR: 'APP.WalletConnector',
  APP_LANG: 'APP.Language',
  APP_THEME: 'APP.Theme',
  USER_ADDRESS: 'APP.UserAddress',
  USER_INFO: 'APP.UserInfo',

  // REQUEST HEADERS
  AUTH_PASSPORT: 'Authorization',
  AUTH_ADDRESS: 'User-Address',
  CONTENT_LANG: 'Content-Language',
  XSRF_TOKEN: 'XSRF-TOKEN',
  X_CSRF_TOKEN: 'X-CSRF-TOKEN',

  // STATIC
  IPFS_GATEWAY: 'https://ipfs.io/ipfs'
}

export const isBrowser: boolean = typeof window !== 'undefined'
export const isDevelop: boolean = configs.APP_MODE === 'development'
export const isProduction: boolean = configs.APP_MODE === 'production'

export const chian: ChianConfigs = {
  56: {
    chianId: 56,
    network: Network.Mainnet,
    explorer: 'https://bscscan.com',
    rpcs: ['https://bsc-dataseed.binance.org', 'https://bsc-dataseed1.defibit.io', 'https://bsc-dataseed1.ninicoin.io']
  },
  97: {
    chianId: 97,
    network: Network.Testnet,
    explorer: 'https://testnet.bscscan.com',
    rpcs: [
      'https://data-seed-prebsc-1-s1.binance.org:8545',
      'https://data-seed-prebsc-1-s2.binance.org:8545',
      'https://data-seed-prebsc-1-s3.binance.org:8545'
    ]
  }
}[configs.APP_CHAIN_ID]!

export const isMainnet: boolean = chian.network === Network.Mainnet
export const isTestnet: boolean = chian.network === Network.Mainnet
