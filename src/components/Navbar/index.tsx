import { useCallback } from 'react'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { modal, shortAddress } from '@/utils'
import { UseModal as Modal } from '@/types'

export function NavbarComponent() {
  // __STATE <React.Hooks>
  const { account } = useWeb3ReactCore()

  // __FUNCTIONS
  const handleConnect = useCallback(() => {
    if (account) return void 0

    modal.on(Modal.CONNECT_WALLET, { name: 'connect-wallet', title: 'Connect to a wallet' })
  }, [account])

  const handleAccount = useCallback(() => {
    if (!account) return void 0

    modal.on(Modal.ACCOUNT_DETAILS, { name: 'account-details', title: 'Account' })
  }, [account])

  // __RENDER
  return (
    <nav className='ui--navbar'>
      <div className='ui--navbar-container'>
        <div className='ui--navbar-column lf'>&nbsp;</div>

        <div className='ui--navbar-column rg'>
          {account ? (
            <button className='btn btn-secondary btn-account' onClick={handleAccount}>
              <span className='icon bi bi-wallet'></span>
              <span className='text'>{shortAddress(account)}</span>
            </button>
          ) : (
            <button className='btn btn-secondary btn-connect' onClick={handleConnect}>
              <span className='icon bi bi-wallet2'></span>
              <span className='text'>Connect Wallet</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
