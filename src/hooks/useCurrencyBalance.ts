// import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { authSelector } from '@/store'
import { FetchStatus } from '@/types'
import { useActiveWeb3React } from '.'

export interface UseTokenBalanceState {
  balance: any
  credit: any
  fetchStatus: FetchStatus
}

export function useCurrencyBalance(): [] {
  // __STATE <React.Hooks>
  const { account } = useActiveWeb3React()
  const user = useSelector(authSelector.getUser)

  // __EFFECTS <React.Hooks>
  // useEffect(() => {}, [account])

  // __RETURN
  return []
}
