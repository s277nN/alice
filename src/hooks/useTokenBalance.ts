import { useEffect, useMemo, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import { Token } from '@pancakeswap/sdk'
import { useTokenContract, useWeb3ReactCore } from '@/hooks'
import { Fraction } from '@/libs/fraction'

export function useTokenBalance(token: Token) {
  // __STATE <React.Hooks>
  const { account } = useWeb3ReactCore()
  const tokenContract = useTokenContract(token.address, false)

  const [state, setState] = useState<Fraction>(Fraction.ZERO)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    async function getBalance() {
      if (!tokenContract) return void 0

      try {
        const [balance] = (await tokenContract.balanceOf(account)) as [BigNumber]
        setState(Fraction.from(balance))
      } catch (error) {
        console.error(error)
      }
    }

    if (account) getBalance()
  }, [account, token, tokenContract])

  // __RETURN
  return useMemo(() => state, [account, state])
}
