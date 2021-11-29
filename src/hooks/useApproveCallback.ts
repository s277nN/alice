import { useState, useEffect, useCallback, useMemo } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
// import { MaxUint256 } from '@ethersproject/constants'
import { Token } from '@pancakeswap/sdk'
import { useTokenContract, useTokenAllowance, useWeb3ReactCore } from '@/hooks'
import { Fraction } from '@/libs/fraction'
import { ApprovalState } from '@/types'

export type ApproveCallback = [ApprovalState, (amount?: BigNumber) => Promise<void>, Fraction]

export function useApproveCallback(token: Token, spender: string): ApproveCallback {
  // __STATE <React.Hooks>
  const { account } = useWeb3ReactCore()
  const tokenContract = useTokenContract(token.address)
  const allowance = useTokenAllowance(token, spender)

  const [approvalState, setApprovalState] = useState<ApprovalState>(ApprovalState.APPROVED)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    if (allowance.isZero()) {
      setApprovalState(ApprovalState.NOT_APPROVED)
    }
  }, [allowance])

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
  return useMemo(() => [approvalState, approve, allowance], [approvalState, approve, allowance])
}
