import { useState, useEffect, useMemo } from 'react'
import { useActiveWeb3React } from '@/hooks'
import { Currency, ApprovalState } from '@/types'

export function useTokenAllowance(currency: Currency, spender: string, status: ApprovalState) {
  // __STATE <React.Hooks>
  const { account } = useActiveWeb3React()
  const [allowance, setAllowance] = useState<number>(0)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    async function getAllowance() {
      if (currency.type !== 'token') return void 0

      try {
        // const { methods } = TokenContract.build(currency.address)
        // const results = await methods.allowance(account!, spender).call()
        // const value = BIG_Number(0).div(BIG_TEN.pow(18)).toNumber()

        setAllowance(0)
      } catch (error) {
        console.error(spender, error)
      }
    }

    if (account) getAllowance()
  }, [account, allowance, currency, status])

  // __RETURN
  return useMemo(() => allowance, [allowance, status])
}
