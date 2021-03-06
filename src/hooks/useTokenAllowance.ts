import { useEffect, useMemo, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import { Token } from '@pancakeswap/sdk'
import { useTokenContract, useWeb3ReactCore } from '@/hooks'
import { Fraction } from '@/libs/fraction'

export function useTokenAllowance(token: Token, spender: string) {
  // __STATE <React.Hooks>
  const { account } = useWeb3ReactCore()
  const tokenContract = useTokenContract(token.address, false)

  const [state, setState] = useState<Fraction>(Fraction.ZERO)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    async function getAllowance() {
      if (!tokenContract) return void 0

      try {
        const [allowance] = (await tokenContract.allowance(account, spender)) as [BigNumber]
        setState(Fraction.from(allowance))
      } catch (error) {
        console.error(error)
      }
    }

    if (account) getAllowance()
  }, [account, token, spender, tokenContract])

  // __RETURN
  return useMemo(() => state, [account, state])
}
