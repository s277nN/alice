import { Interface } from '@ethersproject/abi'
import ERC20_ABI from './abis/erc20.json'
import ERC721_ABI from './abis/erc721.json'
import MULTICALL_ABI from './abis/multicall.json'

export { CONTRACTS_ADDRESS } from './address'

export { ERC20_ABI, ERC721_ABI, MULTICALL_ABI }

export const ERC20_INTERFACE = new Interface(ERC20_ABI)
export const ERC721_INTERFACE = new Interface(ERC721_ABI)
export const MULTICALL_INTERFACE = new Interface(MULTICALL_ABI)
