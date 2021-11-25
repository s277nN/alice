import { useState, useEffect, useCallback } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import { useActiveWeb3React, useTokenContract, useTokenAllowance } from '@/hooks'
import { Currency, ApprovalState } from '@/types'

export function useApproveCallback(
  currency: Currency,
  spender: string
): [ApprovalState, (amount?: BigNumber) => Promise<void>, number] {
  // __STATE <React.Hooks>
  const { account } = useActiveWeb3React()
  const [approvalState, setApprovalState] = useState<ApprovalState>(ApprovalState.APPROVED)
  const tokenContract = useTokenContract(currency.address)
  const currentAllowance = useTokenAllowance(currency, spender, approvalState)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    setApprovalState(currentAllowance ? ApprovalState.APPROVED : ApprovalState.NOT_APPROVED)
  }, [currentAllowance])

  // __FUNCTIONS
  const approve = useCallback(
    async (amountToApprove?: BigNumber): Promise<void> => {
      if (!account || amountToApprove?.isZero()) return void 0

      if (approvalState !== ApprovalState.NOT_APPROVED) {
        console.error('approve was called unnecessarily')
        return void 0
      }

      setApprovalState(ApprovalState.PENDING)

      // try {
      //   const amount = toUint256(amountToApprove || 100000).toString(10)
      //   const results = await currencyMethods.approve(spender, amount).send({ from: account })
      //   setApprovalState(results.status ? ApprovalState.APPROVED : ApprovalState.NOT_APPROVED)
      // } catch (error) {
      //   console.error(error)
      //   setApprovalState(ApprovalState.NOT_APPROVED)
      // }
    },
    [account, approvalState, tokenContract]
  )

  // __RETUEN
  return [approvalState, approve, currentAllowance]
}
